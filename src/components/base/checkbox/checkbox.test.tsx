import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Checkbox from './index';



test('renders list of countries', () => {
  render(<Checkbox countryName="Argentina"/>);
  const listElement = screen.getByRole('checkbox');
  userEvent.click(listElement)
  expect(listElement).toBeChecked()
});
