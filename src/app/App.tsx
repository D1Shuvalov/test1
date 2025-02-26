import {useTests} from '../hooks/useTest';
import {Dashboard} from '../components/Dashboard/Dashboard';
import {SearchField} from '../components/SearchField/SearchField';
import {Spinner} from '../shared/Spinner/Spinner';
import './App.css';

export const App = () => {
  const {
    tests,
    sites,
    isLoading,
    searchQuery,
    selectedType,
    sortOrder,
    handleSearch,
    handleTypeSortChange,
    handleSort,
    handleReset,
  } = useTests();

  if (!tests) return <h1>NNN</h1>

  if (isLoading) return <Spinner/>

  return (
    <main className='main-wrapper'>
      <h1>Dashboard</h1>
      <div className='main-content'>
        <SearchField searchQuery={searchQuery} handleSearch={handleSearch} filteredCount={tests.length}/>
        <Dashboard
          tests={tests}
          sites={sites}
          onSort={handleSort}
          onReset={handleReset}
          sortOrder={sortOrder}
          onTypeSortChange={handleTypeSortChange}
          selectedType={selectedType}
        />
      </div>
    </main>
  );
};
