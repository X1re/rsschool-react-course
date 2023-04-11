import { useEffect, useState } from 'react';
import Card from '../components/ui/Card';
import Loading from '../components/ui/Loading';
import flickr from '../services/flickr.service';
import { Photo } from '../services/flickr.service';
import Search from '../components/ui/Search';
import '../styles/components/Card.css';
import Modal from '../components/ui/Modal';

const Home = () => {
  const [homeCards, setHomeCards] = useState<[] | Photo[]>([]);
  const storageValue = localStorage.getItem('searchValue');
  const [searchValue, setSearchValue] = useState(storageValue || null);
  const [modal, setModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Photo>();

  const handleSearchSubmit = (searchQuery: string): void => {
    localStorage.setItem('searchValue', searchQuery);
    setSearchValue(searchQuery);
    if (searchQuery) {
      findPhotos(searchQuery);
    } else getPopular();
  };

  async function findPhotos(query: string) {
    try {
      const { photo } = await flickr.search.get(query);
      setHomeCards(photo);
    } catch (error) {
      console.log(error);
    }
  }
  const openCardModal = (id: string) => {
    const clickedCard = homeCards.find((card) => card.id === id);
    setSelectedCard(clickedCard);
    setModal(true);
  };

  const getPopular = async () => {
    try {
      const { photo } = await flickr.interesting.get();
      setHomeCards(photo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (storageValue) {
      findPhotos(storageValue);
    }
  }, [storageValue]);
  useEffect(() => {
    if (!searchValue) {
      getPopular();
    }
  }, [searchValue]);

  return (
    <div className="home-container" data-testid="home" style={{ overflow: 'hidden' }}>
      {modal && <Modal modalType="card" open={modal} card={selectedCard} onClose={setModal} />}
      <Search onSearch={handleSearchSubmit} value={searchValue || ''} />
      <div className="card-container" role="main">
        {homeCards.length > 0 ? (
          homeCards.map((homeCard) => (
            <Card key={homeCard.id} {...homeCard} onCardClick={openCardModal} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Home;
