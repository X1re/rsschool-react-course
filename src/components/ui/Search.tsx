import { ChangeEventHandler, FormEventHandler, useEffect, useRef, useState } from 'react';
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
  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  const valRef = useRef(searchValue);
  useEffect(() => {
    valRef.current = searchValue;
  }, [searchValue]);

  useEffect(() => {
    return () => {
      if (valRef.current) {
        localStorage.setItem('searchValue', valRef.current);
      }
    };
  }, []);

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
