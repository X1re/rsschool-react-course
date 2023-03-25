import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header and home page by default', () => {
  render(<App />);

  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();

  const homePageElement = screen.getByTestId('home');
  expect(homePageElement).toBeInTheDocument();
});
