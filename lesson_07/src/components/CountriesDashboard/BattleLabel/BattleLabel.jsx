import React, { useContext } from "react";

import CountriesContext from "../../../contexts/CountriesContext";

export default function BattleLabel({ item }) {
  const { getCountryBattleLabel } = useContext(CountriesContext);

  return <h5>{getCountryBattleLabel(item)}</h5>;
}
