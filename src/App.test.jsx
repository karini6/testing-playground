/* eslint-disable no-restricted-globals */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';



describe('<App />', () => { 
  it('renders start page', () => {
    render(<App />);
    const title = screen.getByText(/Traveller's planner/i);
    const searchField = screen.getByLabelText(/Countries I want to visit/i)
    expect(title).toBeInTheDocument();
    expect(searchField).toBeInTheDocument()
  });

  it('allows user to search for countries', () => {
    render(<App />);
    const search = screen.getByRole('textbox',  {name: /Countries I want to visit/i})
    expect(search).toBeEnabled()
      userEvent.type(search, 'Norway')
    expect(search).toHaveValue("Norway")
  })

  it('shows list of countries on search', () => {
    render(<App />);
    userEvent.type(screen.getByPlaceholderText(/Start typing/i), 'No')
    const listOfSearchedCountries = screen.getByText(/Matching countries/i)
    expect(listOfSearchedCountries).toBeVisible()
  })

  it('checks off country on click', () => {
    render(<App />)
    const searchField = screen.getByRole('textbox', {name: /ountries I want to visit/i})
    const searchResultTitle = screen.getByText(/matching countries:/i)
    userEvent.type(searchField, 'Norway')
    const searchResultItem = screen.getByRole('checkbox', { name: 'Norway' })
    userEvent.click(searchResultItem)
    expect(searchResultTitle).toBeVisible()
    expect(searchResultItem).toBeChecked()
  })

  it('persists checked items on refresh', () => {
    render(<App />)
    const searchField = screen.getByRole('textbox', {name: /ountries I want to visit/i})
    userEvent.type(searchField, 'Norway')
    const searchResultItem = screen.getByRole('checkbox', { name: 'Norway' })
    userEvent.type(searchField, 'Norway')
    expect(searchResultItem).toBeChecked()
  })

  it('updates checked after unchecking', () => {
    render(<App />)
    const searchField = screen.getByRole('textbox', {name: /ountries I want to visit/i})
    userEvent.type(searchField, 'Norway')
    const searchResultItem = screen.getByRole('checkbox', { name: 'Norway' })
    userEvent.type(searchField, 'Norway')
    expect(searchResultItem).toBeChecked()
    userEvent.click(searchResultItem)
    expect(searchResultItem).not.toBeChecked()
  })
})