export type filteredCountryListType = {
  countryName: string;
  isChecked: boolean;
  key: number;
}


export type CountryResponse = [
  {
      name: string;
      topLevelDomain: string[];
      alpha2Code: string;
      alpha3Code: string;
      callingCodes: string[];
      capital: string;
      altSpellings: string[];
      region: string;
      subregion: string;
      population: number;
      latlng: number[];
      demonym: string;
      area: number;
      gini: number;
      timezones: string[];
      borders: string[];
      nativeName: string;
      numericCode: string;
      currencies: [
          {
              code: string;
              name: string;
              symbol: string;
          }
      ],
      languages: [
          {
              iso639_1: string;
              iso639_2: string;
              name: string;
              nativeName: string;
          }
      ],
      translations: {
          br: string;
          de: string;
          es: string;
          fa: string;
          fr: string;
          hr: string;
          it: string;
          ja: string;
          nl: string;
          pt: string;
      },
      flag: string;
      regionalBlocs: [
          {
              acronym: string;
              name: string;
          }
      ],
      cioc: string;
  }
]