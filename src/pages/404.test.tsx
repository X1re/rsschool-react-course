import { render } from '@testing-library/react';
import NotFound from './404';

describe('AboutUs component', () => {
  test('renders heading and paragraph', () => {
    const { getByText } = render(<NotFound />);
    const headingElement = getByText(/404/i);
    const paragraphElement = getByText(/Oops something went wrong! This page does not exist./i);
    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
