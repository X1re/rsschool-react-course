import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

describe('header', () => {
  it('renders about us', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    expect(screen.getByTestId('header')).toBeTruthy();
  });
});
