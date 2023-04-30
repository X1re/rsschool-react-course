import { describe, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Survey from './Survey';
import { Provider } from 'react-redux';
import { store } from '../store/createStore';

describe('Survey page', () => {
  afterEach(() => {
    cleanup();
  });

  it('is rendered', () => {
    render(
      <Provider store={store}>
        <Survey></Survey>
      </Provider>
    );
    expect(screen.getByText('Pls share with us your favorite animal')).toBeInTheDocument();
    expect(screen.getByText('Fill the input to share')).toBeInTheDocument();
  });
});
