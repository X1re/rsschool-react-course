import { IdataArr } from '../../pages/Survey';
import '../../styles/components/SurveyCard.css';

const SurveyCard = ({ name, animalName, birthday, country, sex, agreement, img }: IdataArr) => {
  return (
    <div className="survey-card">
      <div className="survey-card__image">
        <img src={img} width="300" height="300" alt={animalName} />
      </div>
      <div className="survey-card__content">
        <p className="survey-card__text">{animalName}</p>
        <h2>Hey! {name}</h2>
        <p className="survey-card__text">your birthday: {birthday}</p>
        <p className="survey-card__text">you are from {country}</p>
        <p className="survey-card__text">{sex}</p>
        <p className="survey-card__text">thank you for sharing! {agreement}</p>
      </div>
    </div>
  );
};

export default SurveyCard;
