import {useState, useEffect} from 'react'
import useLocalStorage from '../../../hooks/useLocalStorage';

type CheckboxValues = {
    countryName: string;
    isChecked: boolean;
}

function Checkbox({countryName, isChecked}: CheckboxValues) {
const [checked, setChecked] = useState(false)
const {setCountriesInLocalStorage} = useLocalStorage()

useEffect(() => {
    setChecked(isChecked)
}, [isChecked])

const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setChecked((prevValue) => !prevValue)
    setCountriesInLocalStorage(e)
}

    return (
        <label>
        <input type="checkbox" name={countryName} checked={checked} onChange={(e) => handleChange(e)} value={countryName}/>
        {countryName}
        </label>
    )
}

export default Checkbox