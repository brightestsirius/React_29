import React from "react";
import "./style.sass";

import CountriesContext from "../../contexts/CountriesContext";
import useCountries from "../../hooks/useCountries";

import CountriesWrapper from './CountriesWrapper/CountriesWrapper'

export default function Countries() {
  const stateCountries = useCountries();

  return (
    <div className="countries__dashboard">
      <h1>Countries Dashboard</h1>

      <CountriesContext.Provider value={{ ...stateCountries }}>
        <CountriesWrapper />
      </CountriesContext.Provider>
    </div>
  );
}
