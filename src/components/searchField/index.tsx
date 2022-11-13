import  {useEffect, useState} from 'react'
import './searchField.css'


function SearchField() {
    const [countryName, setCountryName] = useState('')
    const [countryList, setCountryList] = useState([])
    const BASEURL = process.env.REACT_APP_BASEURL
    const API_KEY = process.env.REACT_APP_API_KEY

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setCountryName(e.currentTarget.value)
    }

    useEffect(() => {
        // fetch(`${BASEURL}all?access_key=${API_KEY}&fulltext=false`)
        fetch(`${BASEURL}${countryName}?access_key=${API_KEY}&fulltext=false`)
        .then(response => {
            if(response.ok) {
                return response.ok
            }
            throw response;
        })
        .then((response) => console.log("response: ", response))
        .catch(err => {
            console.error('error fetching data: ', err)
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [countryName])


    return (
        <>
        <label htmlFor="countryName">Countries I want to visit</label>
        <input 
        name="countryName" 
        id="countryName"
        className='countryNameSearchField' 
        type="text" 
        placeholder='Hvilket land vil du besøke?' 
        onChange={handleChange} 
        value={countryName}
        />
        </>
    )
}

export default SearchField;


// /${countryName}