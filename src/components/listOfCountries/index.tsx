import Checkbox from "../base/checkbox";

type ListOfCountriesProps = {
    countries: any[];
}

export default function ListOfCountries({countries}: ListOfCountriesProps) {
    return (
        <>
        <h2>Matching countries:</h2>
        {Array.isArray(countries) && countries.length > 0 ? countries.map((country: any) => {
            return (
                <div key={country.key}>
                    <Checkbox isChecked={country.isChecked} countryName={country.countryName} key={country.key}/>
                </div>
            )
        }) : <h3>Oops, no matches! Try again!</h3>}
        </>
    )
}