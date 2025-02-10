import React, { useContext, useRef } from "react";

import CountriesContext from "./../../../contexts/CountriesContext";

export default function CountriesCardForm({ index, item }) {
  const { stateCountries, setCardCountry } = useContext(CountriesContext);

  const selectRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardCountry({ ...item, name: selectRef.current.value });
  };

  return (
    <form className="countries__card--from" onSubmit={handleSubmit}>
      <label>
        Select country #{++index}:{" "}
        <select ref={selectRef}>
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
