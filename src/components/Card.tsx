import React, { Component } from 'react';
import { CardProps } from '../mockdata/data';
import '../styles/components/Card.css';

class Card extends Component<CardProps> {
  render() {
    const { image, title, description } = this.props;
    return (
      <div className="card">
        <img src={image} alt={title} />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    );
  }
}

export default Card;
