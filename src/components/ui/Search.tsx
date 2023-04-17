import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/typedHooks';
import { searchPhotos } from '../../store/searchSlice';
import '../../styles/components/Search.css';

const Search = () => {
  const search = useAppSelector((state) => state.search.value);
  const [searchValue, setSearchValue] = useState(search);
  const dispatch = useAppDispatch();

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    dispatch(searchPhotos(searchValue));
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
