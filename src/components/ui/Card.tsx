import { Photo } from '../../services/flickr.service';
import '../../styles/components/Card.css';

const Card = ({ id, secret, server, title, onCardClick }: Photo) => {
  return (
    <div className="card" onClick={() => onCardClick(id)}>
      <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
      <div className="card-content">
        <p className="card-title">{title}</p>
      </div>
    </div>
  );
};

export default Card;
