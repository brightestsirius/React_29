import React, { useContext } from "react";

import CountriesContext from "../../../contexts/CountriesContext";
import CountriesCard from "./../CountriesCard/CountriesCard";

export default function CountriesCards() {
  const { stateCountries } = useContext(CountriesContext);

  return (
    <div className="countries__cards">
      {stateCountries.countries.map((item, index) => (
        <CountriesCard key={index} item={item} index={index} />
      ))}
    </div>
  );
}
