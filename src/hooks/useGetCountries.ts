import {useState} from 'react'
import { CountryResponse}  from '../types/types';

export default function useGetCountries() {
    const [countryList, setCountryList] = useState<string[]>([])
    const BASEURL = process.env.REACT_APP_BASEURL
    const API_KEY = process.env.REACT_APP_API_KEY

    async function getCountries() {
        try {
          const response = await fetch(`${BASEURL}all?access_key=${API_KEY}`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
            },
          });
      
          if (!response.ok) {
            throw new Error(`Error fetching data: ${response.status}`);
          }
      
          const result = (await response.json()) as CountryResponse;
          setCountryList(result.map(country => country.name))
    
        } catch (error) {
          if (error instanceof Error) {
            console.log('error message: ', error.message);
            return error.message;
          } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
          }
        }
      }

      return {
          getCountries,
          countryList
      }
}