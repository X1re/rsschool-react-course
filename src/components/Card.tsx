import React, { Component } from 'react';
import '../styles/components/Card.css';

export interface CardProps {
  title: string;
  image: string;
  description: string;
  id: string;
}

class Card extends Component<CardProps> {
  render() {
    return (
      <div className="card">
        <img src={this.props.image} alt={this.props.title} />
        <div className="card-content">
          <h2 className="card-title">{this.props.title}</h2>
          <p className="card-description">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default Card;
