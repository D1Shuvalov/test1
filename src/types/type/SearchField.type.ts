import {ChangeEvent} from "react";

export type SearchFieldProps = {
  searchQuery: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  filteredCount: number;
};