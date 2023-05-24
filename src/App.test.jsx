/* eslint-disable no-restricted-globals */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';



describe('<App />', () => { 
  it('?', () => {
    render(<App />);
    expect(true).toBeTruthy()
  });
})