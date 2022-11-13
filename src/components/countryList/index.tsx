import React from 'react'
import Checkbox from '../base/checkbox'


type CountryListProps = {
    countries?: string[] | string;
}

function CountryList({countries}: CountryListProps) {
    console.log("countrylist countries: ", countries)
    return (
        <div>
            {Array.isArray(countries) && countries?.map((country, key) => (
                <div key={key}>
                    <Checkbox countryName={country} checkboxName={`Want to visit ${country}`} />
                    {country}
                    </div>
            ))}
        </div>
    )
}

export default CountryList