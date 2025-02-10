import React, { useReducer, useEffect } from "react";

import { reducer, INITIAL_STATE } from "../store/countries/reducer";
import { actionCreator } from "../store/store";
import {
  COUNTRIES_FORM_SUBMIT,
  SET_REGION_COUNTRIES,
  SET_REGION_COUNTRIES_SETTED,
  SET_COUNTRY
} from "./../store/countries/actions";

import service from "../services/restcountries";

export default function useCountries() {
  const [stateCountries, dispatchCountries] = useReducer(
    reducer,
    INITIAL_STATE
  );

  const countriesFormSubmit = (payload) => {
    dispatchCountries(actionCreator(COUNTRIES_FORM_SUBMIT, payload));
  };

  const getRegionCountries = async () => {
    try {
      const response = await service.getSubRegionCountries(
        stateCountries.countriesSubRegion
      );
      dispatchCountries(actionCreator(SET_REGION_COUNTRIES, response));
    } catch (err) {
      console.log(err);
    }
  };

  const setCountry = (payload) => {
    dispatchCountries(actionCreator(SET_COUNTRY, payload))
  }

  useEffect(() => {
    if (stateCountries.countriesFormSubmitted) {
      getRegionCountries();
    }
  }, [stateCountries.countriesFormSubmitted]);

  useEffect(() => {
    if (stateCountries.regionCountries.length) {
      dispatchCountries(actionCreator(SET_REGION_COUNTRIES_SETTED, true));
    }
  }, [stateCountries.regionCountries]);

  useEffect(() => {
    console.log(stateCountries);
  }, [stateCountries]);

  return { stateCountries, countriesFormSubmit, setCountry };
}
