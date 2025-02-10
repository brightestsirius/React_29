import React from "react";

import CountriesCardInfo from "./../CountriesCardInfo/CountriesCardInfo";
import CountriesCardForm from "./../CountriesCardForm/CountriesCardForm";

export default function CountriesCard({ item, index }) {
  return (
    <div className="countries__card">
      {item.data ? (
        <CountriesCardInfo item={item} index={index} />
      ) : (
        <CountriesCardForm index={index} item={item} />
      )}
    </div>
  );
}