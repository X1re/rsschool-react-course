import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import Loading from '../components/ui/Loading';
import flickr from '../services/flickr.service';
import { Photo } from '../services/flickr.service';
import Search from '../components/ui/Search';
import '../styles/components/Card.css';

const Home = () => {
  const [homeCards, setHomeCards] = useState<[] | Photo[]>([]);
  const storageValue = localStorage.getItem('searchValue');
  const [searchValue, setSearchValue] = useState(storageValue || null);
  const handleSearchSubmit = (searchQuery: string): void => {
    setSearchValue(searchQuery);
    findPhotos(searchQuery);
  };

  async function findPhotos(query: string) {
    try {
      const { photo } = await flickr.search.get(query);
      setHomeCards(photo);
    } catch (error) {
      console.log(error);
    }
  }

  const getPopular = async () => {
    try {
      const { photo } = await flickr.interesting.get();
      setHomeCards(photo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPopular();
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
        {homeCards.length > 0 ? (
          homeCards.map((homeCard) => <Card key={homeCard.id} {...homeCard} />)
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Home;
