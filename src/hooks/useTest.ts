import {useState, useEffect, useMemo, ChangeEvent} from 'react';
import {getTests, getSites} from '../app/api/api';
import {Test, Site, Type} from '../types/type';
import {statusOrderASC, statusOrderDESC} from '../shared/consts';

export const useTests = () => {
  const [tests, setTests] = useState<Test[]>([]);
  const [sites, setSites] = useState<Site[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [selectedType, setSelectedType] = useState<Type | 'ALL'>('ALL');
  const [selectedColumn, setSelectedColumn] = useState<keyof Test | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const [testsData, sitesData] = await Promise.all([getTests(), getSites()]);
        setTests(testsData);
        setSites(sitesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleTypeSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value as 'ALL' | Type);
  };

  const handleSort = (column: keyof Test) => {
    if (selectedColumn === column) {
      setSortOrder(prevSortOrder => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortOrder('asc');
    }
    setSelectedColumn(column);
  };

  const filteredAndSortedTests = useMemo(() => {
    let result = [...tests];

    result = result.filter(test =>
      test.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedType === 'ALL' || test.type === selectedType)
    );

    if (selectedColumn) {
      result.sort((prev, next) => {
        let valueA: any = prev[selectedColumn];
        let valueB: any = next[selectedColumn];

        if (selectedColumn === 'status') {
          const order = sortOrder === 'asc' ? statusOrderASC : statusOrderDESC;
          return order.indexOf(prev.status) - order.indexOf(next.status);
        }

        if (selectedColumn === 'siteId') {
          valueA = sites.find(site => site.id === prev.siteId)?.url.replace(/^https?:\/\//, '').replace(/^www\./, '') || '';
          valueB = sites.find(site => site.id === next.siteId)?.url.replace(/^https?:\/\//, '').replace(/^www\./, '') || '';
        }

        return sortOrder === 'asc' ? (valueA > valueB ? 1 : -1) : (valueA < valueB ? 1 : -1);
      });
    }

    return result;
  }, [tests, searchQuery, selectedType, sortOrder, selectedColumn, sites]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedType('ALL');
    setSelectedColumn(null);
  };

  return {
    tests: filteredAndSortedTests,
    sites,
    isLoading,
    searchQuery,
    selectedType,
    sortOrder,
    handleSearch,
    handleTypeSortChange,
    handleSort,
    handleReset,
  };
};
