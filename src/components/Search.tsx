import React, { ChangeEvent, Component } from 'react';
import '../styles/components/Search.css';

export interface SearchProps {
  onSearch: (searchQuery: string) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

interface SearchState {
  searchQuery: string;
}

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    const searchQuery = localStorage.getItem('searchQuery') || '';
    this.state = { searchQuery };
  }

  componentWillUnmount() {
    localStorage.setItem('searchQuery', this.state.searchQuery);
  }

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchQuery);
  };

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            value={this.state.searchQuery}
            onChange={this.handleSearchChange}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;