import React, { useContext, useRef } from "react";

import CountriesContext from "../../../contexts/CountriesContext";

export default function CountriesCardForm({ item, index }) {
  const { stateCountries, setCountry } = useContext(CountriesContext);

  const selectCountrieRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCountry({ id: item.id, name: selectCountrieRef.current.value });
  };

  return (
    <form className="countries__card--form" onSubmit={handleSubmit}>
      <label>
        Select country #{++index}{" "}
        <select ref={selectCountrieRef}>
          {stateCountries.regionCountries.map((item, index) => (
            <option key={index} value={item.name.common}>
              {item.flag} {item.name.official}
            </option>
          ))}
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
