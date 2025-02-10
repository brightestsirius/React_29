import React, { useContext } from "react";

import CountriesContext from "../../../contexts/CountriesContext";
import CountriesCard from "./../CountriesCard/CountriesCard";
import Button from "../../Button/Button";

export default function CountriesCards() {
  const { stateCountries, startBattle, restartBattle } = useContext(CountriesContext);
  return (
    <div className="countries__cards">
      {stateCountries.countries.map((item, index) => (
        <CountriesCard key={index} item={item} index={index} />
      ))}
      {stateCountries.countriesSelected ? stateCountries.resetBattle ? <Button title={`Restart Battle!`} handleClick={restartBattle} /> : <Button title={`Start Battle!`} handleClick={startBattle} /> : null}
    </div>
  );
}
