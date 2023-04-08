import { useState } from 'react';
import '../../styles/components/Modal.css';

type ModalProps = {
  modalType?: string;
  open: boolean;
  onClose: (modalState: boolean) => void;
};

const Modal = ({ modalType, open, onClose }: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);

  const handleCloseModal = () => {
    setIsOpen(false);
    onClose(false);
  };

  if (modalType === 'submit') {
    return (
      <>
        {isOpen && (
          <div className="modal-container" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-button" onClick={handleCloseModal}>
                X
              </button>
              <div className="thankyou-message">
                <h1>Thank you for your submission</h1>
              </div>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return <h1>Card</h1>;
  }
};

export default Modal;
