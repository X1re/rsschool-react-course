import React, { Component } from 'react';
import Card from '../components/Card';
import Search from '../components/Search';
import { withRouter, WithRouterProps } from '../HOC/withRouter';
import cards, { CardProps } from '../mockdata/data';
import '../styles/components/Card.css';

interface HomeState {
  searchValue: string;
  cards: Array<CardProps>;
}

class Home extends Component<WithRouterProps, HomeState> {
  constructor(props: WithRouterProps) {
    super(props);
    const searchValue = localStorage.getItem('searchValue') || '';
    this.state = {
      searchValue,
      cards: cards,
    };
  }

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const searchValue = event.target.value;
    this.setState({ searchValue });
    localStorage.setItem('searchValue', searchValue);
  };

  handleSearchSubmit = (searchQuery: string): void => {
    const filteredCards = this.state.cards.filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    this.setState({ searchValue: searchQuery, cards: filteredCards });
  };

  render() {
    const { searchValue, cards } = this.state;

    return (
      <div className="home-container">
        <Search
          value={searchValue}
          onChange={this.handleSearchChange}
          onSearch={this.handleSearchSubmit}
        />
        <div className="card-container">
          {cards.map((card: CardProps) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
