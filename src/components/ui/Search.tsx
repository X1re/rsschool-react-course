import { ChangeEventHandler, FormEvent, useState } from 'react';
import '../../styles/components/Search.css';

export interface SearchProps {
  onSearch: (searchQuery: string) => void;
  value: string;
}

const Search = ({ onSearch, value }: SearchProps) => {
  const [searchValue, setSearchValue] = useState(value);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
