import { useState } from 'react';
import { Photo } from '../../services/flickr.service';
import '../../styles/components/Modal.css';

type ModalProps = {
  modalType: string;
  open: boolean;
  onClose: (modalState: boolean) => void;
  card?: Photo;
};

const Modal = ({ modalType, open, onClose, card }: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  console.log(card);
  const handleCloseModal = () => {
    setIsOpen(false);
    onClose(false);
  };

  return (
    <>
      {isOpen && (
        <div className="modal-container" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleCloseModal}>
              X
            </button>
            {modalType === 'submit' ? (
              <div className="thankyou-message">
                <h1>Thank you for your submission</h1>
              </div>
            ) : (
              <div className="card-modal">
                <img
                  src={`https://live.staticflickr.com/${card?.server}/${card?.id}_${card?.secret}.jpg`}
                  alt={card?.title}
                />
                <div className="card-modal__content">
                  <p className="card-title">title: {card?.title}</p>
                  <p className="card-title">owner: {card?.owner}</p>
                  <p className="card-title">id: {card?.id}</p>
                  <p className="card-title">server: {card?.server}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
