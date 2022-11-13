import React, {useEffect, useState} from 'react'
import './searchField.css'


function SearchField() {
    const [countryName, setCountryName] = useState('Aus')
    const BASEURL = process.env.REACT_APP_BASEURL
    const API_KEY = process.env.REACT_APP_API_KEY

    const handleChange = () => {
        console.log("changed")
    }

    console.log(process.env.REACT_APP_MY_ENVIRONMENT_VARIABLE);
    useEffect(() => {
        fetch(`http://api.countrylayer.com/v2/name/${countryName}?access_key=${API_KEY}&fulltext=false`)
        .then(res => {
            if(res.ok) {
                return res.ok
            }
            throw res;
        })
        .then((res) => console.log("res: ", res))
        .catch(err => {
            console.error('error fetching data: ', err)
        })

    }, [countryName])


    return (
        <input name="countryName" className='countryNameSearchField' type="text" placeholder='Hvilket land vil du besøke?' onChange={handleChange} />
    )
}

export default SearchField;


// /${countryName}