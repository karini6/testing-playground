import './searchField.css'

type SearchFieldProps = {
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    countryName: string;
}


function SearchField({handleChange, countryName}: SearchFieldProps) {
    return (
        <>
            <label htmlFor="countryName" className='searchFieldLabel'>
                Search for countries
            </label>
            <input 
            name='countryName'
            id='countryName'
            className='countryNameSearchField' 
            type="text" 
            placeholder='Start typing...' 
            onChange={handleChange} 
            value={countryName}
            />
        </>
    )
}

export default SearchField;


