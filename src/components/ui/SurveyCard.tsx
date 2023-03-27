import { Component } from 'react';
import { SurveyState } from '../../pages/Survey';
import '../../styles/components/SurveyCard.css';

class SurveyCard extends Component<SurveyState> {
  render() {
    const { name, animalName, birthday, country, sex, agreement, img } = this.props;
    return (
      <div className="survey-card">
        <div className="survey-card__image">
          <img src={img} alt={animalName} />
        </div>

        <div className="survey-card__content">
          <p className="survey-card__text">{animalName}</p>
          <h2>Hey! {name} !</h2>
          <p className="survey-card__text">your birthday: {birthday}</p>
          <p className="survey-card__text">you are from {country}</p>
          <p className="survey-card__text">{sex}</p>
          <p className="survey-card__text">thank you for sharing! {agreement}</p>
        </div>
      </div>
    );
  }
}

export default SurveyCard;
