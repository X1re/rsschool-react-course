import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store/createStore';

test('renders header and home page by default', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();

  const homePageElement = screen.getByTestId('home');
  expect(homePageElement).toBeInTheDocument();
});
