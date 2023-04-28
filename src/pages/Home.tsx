import { useState } from 'react';
import Card from '../components/ui/Card';
import Loading from '../components/ui/Loading';
import { Photo, useGetPhotosQuery } from '../services/flickr.service';
import Search from '../components/ui/Search';
import '../styles/components/Card.css';
import Modal from '../components/ui/Modal';
import { useAppSelector } from '../hooks/typedHooks';

const Home = () => {
  const [modal, setModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Photo>();
  const search = useAppSelector((state) => state.search.value);

  const {
    data: photosData,
    error: interestingError,
    isLoading: interestingIsLoading,
  } = useGetPhotosQuery(search);

  const openCardModal = (id: string) => {
    setSelectedCard(photosData!.photos.photo.find((el) => el.id === id));
    setModal(true);
  };

  if (interestingError) {
    console.log('ERROR', interestingError);
  }
  return (
    <div className="home-container" data-testid="home" style={{ overflow: 'hidden' }}>
      {modal && <Modal modalType="card" open={modal} card={selectedCard} onClose={setModal} />}
      <Search />

      <div className="card-container" role="main">
        {!interestingIsLoading ? (
          photosData!.photos.photo.map((photos) => (
            <Card key={photos.id} {...photos} onCardClick={openCardModal} />
          ))
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Home;
