import React from 'react';

import {render, screen} from '@testing-library/react';

import Header from '../components/Header';

test('render h1 element', () => {
  render(<Header />);
  expect(screen.getByText('Markdown editor')).toBeInTheDocument();
});

test('render a element', () => {
  render(<Header />);
  expect(screen.getByText('View on Github')).toBeInTheDocument();
});
