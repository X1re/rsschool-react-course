import { Photo } from '../../services/flickr.service';
import '../../styles/components/Card.css';

const Card = ({ id, secret, server, title }: Photo) => {
  return (
    <div className="card">
      <img src={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`} alt={title} />
      <div className="card-content">
        {/* <h2 className="card-title">{title}</h2> */}
        <p className="card-title">{title}</p>
      </div>
    </div>
  );
};

export default Card;
