import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import SearchField from './components/searchField';
import userEvent from '@testing-library/user-event';

it('renders all components', () => {
  render(<App />);
  const title = screen.getByText(/Reiseliste/i);
  const searchField = screen.getByLabelText(/Countries I want to visit/i)
  expect(title).toBeInTheDocument();
  expect(searchField).toBeInTheDocument()
});

it('allows user to search for countries', () => {
  render(<SearchField />);
  const search = screen.getByPlaceholderText(/Hvilket land vil du besøke?/i)
  expect(search).toBeEnabled()
  userEvent.type(search, 'Norway')
  expect(search).toHaveValue("Norway")
})
