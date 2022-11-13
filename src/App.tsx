import React, { useEffect, useState } from 'react';
import './App.css';
import CountryList from './components/countryList';
import SearchField from './components/searchField/index';
import { countryMock as countriesMock } from './countriesMock'



function App() {
    // const BASEURL = process.env.REACT_APP_BASEURL
    // const API_KEY = process.env.REACT_APP_API_KEY
    // const API_KEY2 = process.env.REACT_APP_API_KEY2

  const [countryName, setCountryName] = useState<string>('')
  const [countryList, setCountryList] = useState<string[]>()
    const [filteredCountryList, setFilteredCountryList] = useState<string[]>()
  
    useEffect(() => {
      // fetch(`${BASEURL}?access_key=${API_KEY2}&fulltext=false`)
      // .then((response) => response.json())
      // .then((response) => setCountryList(response.map(a => a.name)))
      // .catch(err => {
      //     console.error('error fetching data: ', err)
      // })
      setCountryList(countriesMock.map(a => a.name.toLowerCase()))

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



    const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
      setCountryName(e.currentTarget.value)
      setFilteredCountryList(countryList?.filter(a => a.includes(e.currentTarget.value)))
  }
    return (
    <div className="App">
      <header className="App-header">
       Traveller's planner
      </header>
      <SearchField handleChange={handleInputChange} countryName={countryName}/>
      <CountryList countries={filteredCountryList}/>
    </div>
  );
}

export default App;
