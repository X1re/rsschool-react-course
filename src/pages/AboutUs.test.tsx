import React from 'react';
import { render } from '@testing-library/react';
import AboutUs from './AboutUs';

describe('AboutUs component', () => {
  test('renders heading and paragraph', () => {
    const { getByText } = render(<AboutUs />);
    const headingElement = getByText(/About Us/i);
    const paragraphElement = getByText(/Here we publish cute animals/i);
    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
