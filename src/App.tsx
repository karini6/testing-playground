import React, { useEffect, useState } from 'react';
import './App.css';
import ListOfCountries from './components/listOfCountries';
import SearchField from './components/searchField/index';
import useLocalStorage from './hooks/useLocalStorage';
import {filteredCountryListType}  from './types/types';
import useGetCountries from './hooks/useGetCountries';



function App() {

  const [countryName, setCountryName] = useState<string>('')
  const [filteredCountryList, setFilteredCountryList] = useState<filteredCountryListType[]>([])
  
  const {savedCountries, getCountriesFromLocalStorage} = useLocalStorage()
  const {getCountries, countryList} = useGetCountries()


    useEffect(() => {
      getCountries()
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
