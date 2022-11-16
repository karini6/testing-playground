import React, { useEffect, useState } from 'react';
import './App.css';
import ListOfCountries from './components/listOfCountries';
import SearchField from './components/searchField/index';
import { countryMock as countriesMock } from './countriesMock'
import useLocalStorage from './hooks/useLocalStorage';
import {filteredCountryListType}  from './types/types';



function App() {
    // const BASEURL = process.env.REACT_APP_BASEURL
    // const API_KEY = process.env.REACT_APP_API_KEY
    // const API_KEY2 = process.env.REACT_APP_API_KEY2

  const [countryName, setCountryName] = useState<string>('')
  const [countryList, setCountryList] = useState<string[]>([])
  const [filteredCountryList, setFilteredCountryList] = useState<filteredCountryListType[]>([])
  
  const {savedCountries, getCountriesFromLocalStorage} = useLocalStorage()
  
    useEffect(() => {
      // fetch(`${BASEURL}?access_key=${API_KEY2}&fulltext=false`)
      // .then((response) => response.json())
      // .then((response) => setCountryList(response.map(a => a.name)))
      // .catch(err => {
      //     console.error('error fetching data: ', err)
      // })
      setCountryList(countriesMock.map(a => a.name))


  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getCountriesFromLocalStorage()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

 
let countryArray: filteredCountryListType[] = []

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
      setCountryName(e.currentTarget.value)
      const filtered: string[] = countryList?.filter(a => a.includes(e.currentTarget.value))
       countryArray = filtered.map((country, key) => ({
          countryName: country,
          isChecked: savedCountries.includes(country),
          key: key
      }))
      setFilteredCountryList(countryArray)
    }

    return (
    <div className="App">
      <header className="App-header">
        Traveller's planner
      </header>
      <SearchField handleChange={handleInputChange} countryName={countryName}/>
        <ListOfCountries countries={filteredCountryList}/>
    </div>
  );
}

export default App;
