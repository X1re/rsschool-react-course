import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import Search from '../components/ui/Search';
import cards, { CardProps } from '../mockdata/data';
import '../styles/components/Card.css';

const Home = () => {
  const [homeCards, setHomeCards] = useState(cards);
  const storageValue = localStorage.getItem('searchValue');
  const [searchValue, setSearchValue] = useState(storageValue || null);
  const handleSearchSubmit = (searchQuery: string): void => {
    const filteredCards = cards.filter((card) =>
      card.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchValue(searchQuery);
    setHomeCards(filteredCards);
  };
  useEffect(() => {
    return () => {
      if (searchValue !== null) {
        localStorage.setItem('searchValue', searchValue);
      }
    };
  }, [searchValue]);
  return (
    <div className="home-container" data-testid="home">
      <Search onSearch={handleSearchSubmit} value={searchValue || ''} />
      <div className="card-container" role="main">
        {homeCards.map((homeCard: CardProps) => (
          <Card key={homeCard.id} {...homeCard} />
        ))}
      </div>
    </div>
  );
};

export default Home;
