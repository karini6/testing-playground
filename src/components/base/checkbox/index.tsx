import {useState} from 'react'

type CheckboxValues = {
    countryName: string;

}

function Checkbox({countryName}: CheckboxValues) {
const [isChecked, setIsChecked] = useState(false)

const handleChange = () => {
    setIsChecked((prevValue) => !prevValue)
}
    return (
        <input type="checkbox" name="vil besøke" checked={isChecked} onChange={handleChange} value={countryName}/>
    )
}

export default Checkbox