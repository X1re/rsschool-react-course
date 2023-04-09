import { render, screen } from '@testing-library/react';
import SurveyCard from './SurveyCard';

describe('Card component', () => {
  const cardProps = {
    name: 'Ben',
    img: '../../public/cat.jpeg',
    animalName: 'Cat',
    sex: 'male',
    birthday: '2023-04-12',
    country: 'Albania',
    agreement: 'true',
  };

  it('name, animalname, sex, brirthday, country, image and agreement', () => {
    render(<SurveyCard {...cardProps} />);
    const nameElement = screen.getByText(/Ben/i);
    const animalNameElement = screen.getByText(/Cat/i);
    const imageElement = screen.getByAltText(/Cat/i);
    expect(nameElement).toBeInTheDocument();
    expect(animalNameElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});

describe('List of cards', () => {
  const cards = [
    {
      name: 'Ben',
      img: '../../public/cat.jpeg',
      animalName: 'Cat',
      sex: 'male',
      birthday: '2000-04-12',
      country: 'Albania',
      agreement: 'true',
    },
    {
      name: 'Joe',
      img: '../../public/duck.jpeg',
      animalName: 'Duck',
      sex: 'male',
      birthday: '2010-01-12',
      country: 'Albania',
      agreement: 'true',
    },
    {
      name: 'Holly',
      img: '../../public/fox.jpg',
      animalName: 'Fox',
      sex: 'female',
      birthday: '2009-01-11',
      country: 'England',
      agreement: 'true',
    },
  ];

  it('renders a list of cards', () => {
    render(
      <div>
        {cards.map((card) => (
          <SurveyCard key={card.birthday} {...card} />
        ))}
      </div>
    );
    const nameElement = screen.getAllByText(/Hey!/i);
    expect(nameElement.length).toBe(3);
  });
});
