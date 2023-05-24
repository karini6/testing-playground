import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Button from './index';



describe('<Button />', () => {
    const handleClickMock = jest.fn()
  it('checks on click', () => {
    render(<Button buttonText='Click me' handleClick={handleClickMock}/>);
    const button = screen.getByRole('button', {name: /Click me/i});
    userEvent.click(button)
    expect(handleClickMock).toHaveBeenCalledTimes(1)
  })
})

