import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryList from './index';

const countries = [
    'Norway', 'Argentina', 'England'
]

test('renders list of countries', () => {
  render(<CountryList countries={countries} />);
  const listElement = screen.getByText(/Norway/i);
  expect(listElement).toBeInTheDocument();
});
