import {SearchFieldProps} from "../../types/type/SearchField.type";
import searchIcon from '../../assets/search.svg'
import './SearchField.css'

export const SearchField = ({searchQuery, handleSearch, filteredCount}: SearchFieldProps) => {
  return (
    <div className='search-content'>
      <div className='search-field'>
        <img src={searchIcon} alt="search"/>
        <input
          className='search-input'
          type="text"
          placeholder='What test are you looking for?'
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <p className='count'>{filteredCount} tests</p>
    </div>
  );
};
