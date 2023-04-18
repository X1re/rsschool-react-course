export interface CardProps {
  title: string;
  image: string;
  description: string;
  id: string;
}

const cards: CardProps[] = [
  {
    title: 'Card 1',
    image: '/cat.jpeg',
    description: 'Cat',
    id: '1',
  },
  {
    title: 'Card 2',
    image: '/duck.jpeg',
    description: 'Duck',
    id: '2',
  },
  {
    title: 'Card 3',
    image: '/fox.jpg',
    description: 'Fox',
    id: '3',
  },
  {
    title: 'Card 4',
    image: '/lama.jpg',
    description: 'Lama',
    id: '4',
  },
  {
    title: 'Card 5',
    image: '/lamb.jpeg',
    description: 'Lamb',
    id: '5',
  },
  {
    title: 'Card 6',
    image: '/lion.jpeg',
    description: 'Lion',
    id: '6',
  },
  {
    title: 'Card 7',
    image: './owl.jpeg',
    description: 'Owl',
    id: '7',
  },
  {
    title: 'Card 8',
    image: '/panda.jpeg',
    description: 'Panda',
    id: '8',
  },
];

export default cards;
