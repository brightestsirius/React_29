import React, { useContext } from "react";

import CountriesCardForm from "./../CountriesCardForm/CountriesCardForm";

export default function CountriesCard({ item, index }) {
  return (
    <div className="countries__card">
      <CountriesCardForm item={item} index={index} />
    </div>
  );
}
