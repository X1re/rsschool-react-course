import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card component', () => {
  const cardProps = {
    farm: 356666,
    id: '56546546546',
    owner: 'roewjkew',
    secret: 'reowijrew',
    server: '4234323',
    title: 'Card 1',
    isfamily: 1,
    isfriend: 2,
    ispublic: 3,
    onShowModal: () => {},
    onCardClick: (id: string) => {
      id;
    },
    type: 'photo',
  };

  it('renders card title and image', () => {
    render(<Card {...cardProps} />);
    const titleElement = screen.getByText(/Card 1/i);
    const imageElement = screen.getByAltText(/Card 1/i);
    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});

describe('List of cards', () => {
  const cards = [
    {
      farm: 356666,
      id: '56546546546',
      owner: 'roewjkew',
      secret: 'reowijrew',
      server: '4234323',
      title: 'Card 1',
      isfamily: 1,
      isfriend: 2,
      ispublic: 3,
      onShowModal: () => {},
      onCardClick: (id: string) => {
        id;
      },
      type: 'photo',
    },
    {
      farm: 356667,
      id: '56546546547',
      owner: 'roewjkew',
      secret: 'reowijrew1',
      server: '4234324',
      title: 'Card 2',
      isfamily: 1,
      isfriend: 2,
      ispublic: 3,
      onShowModal: () => {},
      onCardClick: (id: string) => {
        id;
      },
      type: 'photo',
    },
    {
      farm: 356668,
      id: '56546546548',
      owner: 'roewjkew2',
      secret: 'reowijrew',
      server: '4234325',
      title: 'Card 3',
      isfamily: 1,
      isfriend: 2,
      ispublic: 3,
      onShowModal: () => {},
      onCardClick: (id: string) => {
        id;
      },
      type: 'photo',
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
