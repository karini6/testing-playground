import { useState } from "react"

export default function useLocalStorage() {
    const [savedCountries, setSavedCountries] = useState<string>('')



    function getCountriesFromLocalStorage() {
       const countries = localStorage.getItem('countries') 
       if(countries) {
           const parsedCountries = JSON.parse(countries)
        setSavedCountries(parsedCountries)
       }   
    }

    function setCountriesInLocalStorage(e: React.FormEvent<HTMLInputElement>) {
        let countryArray: string[] = []
        const inLocalStorage = localStorage.getItem('countries')
        if(inLocalStorage) {
            const inLocalStorageArray = JSON.parse(inLocalStorage)
            if(inLocalStorageArray.length > 0) {
                inLocalStorageArray.forEach((country: string) => {
                    countryArray.push(country)
                })
            }
        }
        if(e.currentTarget.checked) {
            countryArray.push(e.currentTarget.value)
        }
        else {
            countryArray = countryArray.filter((country: string) => country !== e.currentTarget.value)
        }
        setSavedCountries(JSON.stringify(countryArray))
        localStorage.setItem('countries', JSON.stringify(countryArray))

    }


    

    return {
        getCountriesFromLocalStorage,
        setCountriesInLocalStorage,
        savedCountries
    }
}