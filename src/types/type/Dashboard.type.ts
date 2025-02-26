import {Test} from "../interfaces/Test.interface";
import {Site} from "../interfaces/Site.interface";
import {ChangeEvent} from "react";
import {Type} from "../enums/Type.enum";

export type DashboardProps = {
  tests: Test[];
  sites: Site[];
  onSort: (column: keyof Test, order: 'asc' | 'desc') => void;
  onReset: () => void;
  sortOrder: 'asc' | 'desc';
  onTypeSortChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  selectedType: Type | 'ALL';
};
