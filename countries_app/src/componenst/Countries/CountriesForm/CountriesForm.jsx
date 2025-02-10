import React, { useContext, useRef } from "react";

import CountriesContext from "../../../contexts/CountriesContext";

export default function CountriesForm() {
  const { stateCountries, countriesFormSubmit } = useContext(CountriesContext);

  const inputCountriesCount = useRef();
  const inputCountriesRegion = useRef();
  const inputCountriesSubRegion = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    countriesFormSubmit({
        countriesCount: +inputCountriesCount.current.value,
        countriesRegion: inputCountriesRegion.current.value,
        countriesSubRegion: inputCountriesSubRegion.current.value
    })
  }

  return (
    <form className="countries__form" onSubmit={handleSubmit}>
      <label>
        Count of countries{" "}
        <input type="number" defaultValue={stateCountries.countriesCount} ref={inputCountriesCount} />
      </label>
      <label>
        Region:{" "}
        <input type="text" defaultValue={stateCountries.countriesRegion} ref={inputCountriesRegion} />
      </label>
      <label>
        SubRegion:{" "}
        <input type="text" defaultValue={stateCountries.countriesSubRegion} ref={inputCountriesSubRegion} />
      </label>
      <button>Submit</button>
    </form>
  );
}
