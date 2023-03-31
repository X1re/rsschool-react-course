import { CardProps } from '../../mockdata/data';
import '../../styles/components/Card.css';

const Card = ({ image, title, description }: CardProps) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
