import { render, screen } from '@testing-library/react';
import ListOfCountries from './index';

const countries = [
    {
    countryName: 'Norway',
    key: 0,
    isChecked: true
    }, 
    {
    countryName: 'Kuwait',
    key: 1,
    isChecked: false
        }

]

describe('<ListOfCountries />', () => {
    it('renders a title and a list', () => {
        render(<ListOfCountries countries={countries}/>)
        const listOfSavedCountries = screen.getByText(/matching countries/i)
        expect(listOfSavedCountries).toBeVisible()
    })
})