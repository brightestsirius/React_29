import React, { useContext } from "react";

import CountriesContext from "../../../contexts/CountriesContext";

import CountriesForm from "./../CountriesForm/CountriesForm";
import CountriesCards from "./../CountriesCards/CountriesCards";

export default function CountriesWrapper() {
  const { stateCountries } = useContext(CountriesContext);

  return (
    <>
      {stateCountries.regionCountriesSetted ? (
        <CountriesCards />
      ) : (
        <CountriesForm />
      )}
    </>
  );
}
