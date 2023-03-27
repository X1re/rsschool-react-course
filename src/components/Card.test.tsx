import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
  const cardProps = {
    title: 'Card 1',
    image: '../../public/cat.jpeg',
    description: 'Cat',
    id: '1',
  };

  it('renders card title, image and description', () => {
    render(<Card {...cardProps} />);
    const titleElement = screen.getByText(/Card 1/i);
    const descriptionElement = screen.getByText(/Cat/i);
    const imageElement = screen.getByAltText(/Card 1/i);
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});

describe('List of cards', () => {
  const cards = [
    {
      title: 'Card 1',
      image: '../../public/cat.jpeg',
      description: 'Cat',
      id: '1',
    },
    {
      title: 'Card 2',
      image: '../../public/duck.jpeg',
      description: 'Duck',
      id: '2',
    },
    {
      title: 'Card 3',
      image: '../../public/fox.jpg',
      description: 'Fox',
      id: '3',
    },
  ];

  it('renders a list of cards', () => {
    render(
      <div>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    );
    const titleElements = screen.getAllByText(/Card/i);
    expect(titleElements.length).toBe(3);
  });
});
