import { filteredCountryListType } from "../../types/types";
import Checkbox from "../base/checkbox";

type ListOfCountriesProps = {
    countries?: filteredCountryListType[];
    placeholderText?: string;
}

export default function ListOfCountries({countries, placeholderText}: ListOfCountriesProps) {
    return (
        <>
        <h2>Matching countries:</h2>
        {Array.isArray(countries) && countries.length > 0 ? countries.map((country: any) =>  (
                <div key={country.key}>
                    <Checkbox isChecked={country.isChecked} countryName={country.countryName} key={country.key}/>
                </div>
            )
        ) :
         <h3>{placeholderText}</h3>}
        </>
    )
}