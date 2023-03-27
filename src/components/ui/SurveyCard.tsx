import { Component } from 'react';
import { SurveyState } from '../../pages/Survey';
// import '../../styles/components/Card.css';

class SurveyCard extends Component<SurveyState> {
  render() {
    const { name, animalName, birthday, country, sex, agreement, img } = this.props;
    return (
      <div className="card">
        <img src={img} alt={animalName} />
        <div className="card-content">
          <h2 className="card-title">{name}</h2>
          <h2 className="card-title">{birthday}</h2>
          <h2 className="card-title">{country}</h2>
          <h2 className="card-title">{sex}</h2>
          <h2 className="card-title">{agreement}</h2>
          <p className="card-description">{agreement}</p>
        </div>
      </div>
    );
  }
}

export default SurveyCard;
