import React, { useContext } from "react";
import Button from "./../../Button/Button";

import CountriesContext from "../../../contexts/CountriesContext";
import BattleLabel from "./../BattleLabel/BattleLabel";

export default function CountriesCardInfo({ item, index }) {
  const { resetCountry, stateCountries } = useContext(CountriesContext);
  return (
    <div className="countries__card--info">
      {stateCountries.battleCountries.length ? (
        <BattleLabel item={item} />
      ) : null}
      <h4>
        {item.data.flag} {item.data.name.official}
      </h4>
      {item.additionalData ? (
        <ul>
          <li>Population: {item.additionalData.population}</li>
          <li>Area: {item.additionalData.area}</li>
        </ul>
      ) : (
        <Button title={`Reset`} handleClick={() => resetCountry(item.id)} />
      )}
    </div>
  );
}
