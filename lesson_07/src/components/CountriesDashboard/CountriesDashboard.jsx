import React from "react";
import "./style.sass";

import CountriesContext from "./../../contexts/CountriesContext";
import useCountries from "../../hooks/useCountries";

import CountriesForm from "./CountriesForm/CountriesForm";
import CountriesCards from "./CountriesCards/CountriesCards";

export default function CountriesDashboard() {
  const countriesHook = useCountries();

  return (
    <div className="countries__dashboard">
      <h4>Countries Dashboard</h4>
      <CountriesContext.Provider value={{ ...countriesHook }}>
        {countriesHook.stateCountries.countriesFormSubmitted ? (
          <CountriesCards />
        ) : (
          <CountriesForm />
        )}
      </CountriesContext.Provider>
    </div>
  );
}
