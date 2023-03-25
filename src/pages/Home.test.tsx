import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home component', () => {
  test('renders search bar and card container', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    const searchInput = screen.getByPlaceholderText('Search...');
    const cardContainer = screen.getByRole('main');
    expect(searchInput).toBeInTheDocument();
    expect(cardContainer).toBeInTheDocument();
  });
});
