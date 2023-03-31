import { useState } from 'react';
import Card from '../components/ui/Card';
import Search from '../components/ui/Search';
import cards, { CardProps } from '../mockdata/data';
import '../styles/components/Card.css';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [homeCards, setHomeCards] = useState(cards);
  const storageValue = localStorage.getItem('searchValue') || '';

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const searchValue = event.target.value;
    setSearchValue(storageValue);
    localStorage.setItem('searchValue', searchValue);
  };

  const handleSearchSubmit = (searchQuery: string): void => {
    const filteredCards = cards.filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setHomeCards(filteredCards);
  };
  return (
    <div className="home-container" data-testid="home">
      <Search value={searchValue} onChange={handleSearchChange} onSearch={handleSearchSubmit} />
      <div className="card-container" role="main">
        {homeCards.map((homeCard: CardProps) => (
          <Card key={homeCard.id} {...homeCard} />
        ))}
      </div>
    </div>
  );
};

export default Home;
