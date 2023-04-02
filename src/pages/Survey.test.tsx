import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Survey from './Survey';

describe('Survey page', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    render(<Survey></Survey>);
    expect(screen.getByText('Pls share with us your favorite animal')).toBeInTheDocument();
    expect(screen.getByText('Fill the input to share')).toBeInTheDocument();
  });
});
