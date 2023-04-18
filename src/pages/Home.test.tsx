import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store/createStore';
// import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

describe('Home component', () => {
  test('renders search bar and card container', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    const searchInput = screen.getByPlaceholderText('Search...');
    const cardContainer = screen.getByRole('main');
    expect(searchInput).toBeInTheDocument();
    expect(cardContainer).toBeInTheDocument();
  });
});
