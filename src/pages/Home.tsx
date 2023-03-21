import React, { Component } from 'react';
import Card, { CardProps } from '../components/Card';
import Search from '../components/Search';
import { withRouter, WithRouterProps } from '../HOC/withRouter';
import '../styles/components/Card.css';

interface HomeState {
  searchValue: string;
  cards: CardProps[];
}

class Home extends Component<WithRouterProps, HomeState> {
  constructor(props: WithRouterProps) {
    super(props);

    const searchValue = localStorage.getItem('searchValue') || '';

    this.state = {
      searchValue,
      cards: [
        {
          title: 'Card 1',
          image: '../../public/cat.jpeg',
          description: 'Cat',
          id: '1',
        },
        {
          title: 'Card 2',
          image: '../../public/duck.jpeg',
          description: 'Duck',
          id: '2',
        },
        {
          title: 'Card 3',
          image: '../../public/fox.jpg',
          description: 'Fox',
          id: '3',
        },
        {
          title: 'Card 4',
          image: '../../public/lama.jpg',
          description: 'Lama',
          id: '4',
        },
        {
          title: 'Card 5',
          image: '../../public/lamb.jpeg',
          description: 'Lamb',
          id: '5',
        },
        {
          title: 'Card 6',
          image: '../../public/lion.jpeg',
          description: 'Lion',
          id: '6',
        },
        {
          title: 'Card 7',
          image: '../../public/owl.jpeg',
          description: 'Owl',
          id: '7',
        },
        {
          title: 'Card 8',
          image: '../../public/panda.jpeg',
          description: 'Panda',
          id: '8',
        },
      ],
    };
  }

  handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    this.setState({ searchValue });
    localStorage.setItem('searchValue', searchValue);
  };

  handleSearchSubmit = (searchQuery: string) => {
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
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
