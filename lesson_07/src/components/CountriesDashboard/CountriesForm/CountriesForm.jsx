import React, { useRef, useContext, useEffect } from "react";

import CountriesContext from "../../../contexts/CountriesContext";

export default function CountriesForm() {
  const { stateCountries, setCountriesParams } = useContext(CountriesContext);

  const inputCountriesCountRef = useRef();
  const inputCountriesRegionRef = useRef();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCountriesParams({
      countriesCount: +inputCountriesCountRef.current.value,
      countriesRegion: inputCountriesRegionRef.current.value,
    });
  };

  useEffect(() => {
    if (stateCountries.countriesFormSubmitted) {
      formRef.current.reset();
    }
  }, [stateCountries.countriesFormSubmitted]);

  return (
    <form className="countries__form" onSubmit={handleSubmit} ref={formRef}>
      <label>
        Count of countries:{" "}
        <input
          type="number"
          defaultValue={stateCountries.countriesCount}
          min={2}
          required
          ref={inputCountriesCountRef}
        />
      </label>
      <label>
        Region:{" "}
        <input
          type="text"
          defaultValue={stateCountries.countriesRegion}
          required
          ref={inputCountriesRegionRef}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}