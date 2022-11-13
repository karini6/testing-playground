import './searchField.css'

type SearchFieldProps = {
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
    countryName: string;
}


function SearchField({handleChange, countryName}: SearchFieldProps) {
   
 


    return (
        <>
            <label htmlFor="countryName" className='searchFieldLabel'>
                Countries I want to visit
            </label>
            <input 
            name='countryName'
            id='countryName'
            className='countryNameSearchField' 
            type="text" 
            placeholder='Search for countries' 
            onChange={handleChange} 
            value={countryName}
            />
        </>
    )
}

export default SearchField;


