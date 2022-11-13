import {useState} from 'react'

type CheckboxValues = {
    countryName: string;
    checkboxName: string;

}

function Checkbox({countryName, checkboxName}: CheckboxValues) {
const [isChecked, setIsChecked] = useState(false)

const handleChange = () => {
    setIsChecked((prevValue) => !prevValue)
}
    return (
        <input type="checkbox" name={checkboxName} checked={isChecked} onChange={handleChange} value={countryName}/>
    )
}

export default Checkbox