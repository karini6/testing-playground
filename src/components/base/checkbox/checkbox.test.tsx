import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Checkbox from './index';



describe('<Checkbox />', () => {
  it('checks on click', () => {
    render(<Checkbox countryName="Argentina" isChecked={false}/>);
    const listElement = screen.getByRole('checkbox');
    userEvent.click(listElement)
    expect(listElement).toBeChecked()
    userEvent.click(listElement)
    expect(listElement).not.toBeChecked()

  })
})

