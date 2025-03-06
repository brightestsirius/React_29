import React, { useContext } from "react";

import CountriesContext from "../../../contexts/CountriesContext";
import Button from "./../../Button/Button";

export default function CountriesCardIntro({ item, index }) {
  const { resetCountry } = useContext(CountriesContext);
  return item.data ? (
    <div className="countries_card--intro">
      <h4>
        Country #{++index} {item.data.flag} {item.data.name.official}
      </h4>
      <Button title={`Reset`} handleClick={() => resetCountry(item.id)} />
    </div>
  ) : null;
}
