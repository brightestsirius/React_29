import React, { useReducer, useEffect } from "react";

import service from "../services/countries";

import { reducer, initialState } from "../store/countries/reducer";
import { actionCreator } from "../store/store";
import {
  SET_COUNTRIES_PARAMS,
  SET_REGION_COUNTRIES,
  SET_COUNTRY,
  RESET_COUNTRY,
  SET_COUNTRIES_SELECTED,
  SET_COUNTRIES_ADDITIONAL_INFO,
  SET_BATTLE_RESULT,
  SET_RESET_BATTLE,
  RESET_BATTLE
} from "../store/countries/actions";

export default function useCountries() {
  const [stateCountries, dispatchCountries] = useReducer(reducer, initialState);

  const setCountriesParams = (payload) => {
    dispatchCountries(actionCreator(SET_COUNTRIES_PARAMS, payload));
  };

  const setCardCountry = async (payload) => {
    try {
      const response = await service.getCountry(payload.name);
      dispatchCountries(
        actionCreator(SET_COUNTRY, { ...payload, data: response[0] })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const getCountries = async () => {
    try {
      const response = await service.getRegionCountries(
        stateCountries.countriesRegion
      );
      dispatchCountries(actionCreator(SET_REGION_COUNTRIES, response));
    } catch (err) {
      console.log(err);
    }
  };

  const startBattle = async () => {
    try {
      const response = await Promise.all(
        stateCountries.countries.map((item) =>
          service.getCountry(item.data.name.common)
        )
      );

      const additionalData = response.map((item) => item[0]);
      dispatchCountries(actionCreator(SET_COUNTRIES_ADDITIONAL_INFO, additionalData));
    } catch (err) {
      console.log(err);
    }
  };

  const makeBattleCalculations = () => {
    const countriesInfo = stateCountries.countries.map(item => {
      return {id: item.id, result: item.additionalData.population+item.additionalData.area}
    }).sort((a,b) => b.result-a.result);
    dispatchCountries(actionCreator(SET_BATTLE_RESULT, countriesInfo))
  }

  const getCountryBattleLabel = (item) => {
    const battleIndex = stateCountries.battleCountries.findIndex(
      (country) => country.id === item.id
    );

    switch(battleIndex){
      case 0:
        return `Winner`;
      case stateCountries.battleCountries.length-1:
        return `Loser`;
      default:
        return `${battleIndex+1}/${stateCountries.battleCountries.length}`;
    }
  }

  const restartBattle = () => {
    dispatchCountries(actionCreator(RESET_BATTLE));
  }

  const resetCountry = (payload) => {
    dispatchCountries(actionCreator(RESET_COUNTRY, payload));
  };

  useEffect(() => {
    if (stateCountries.countriesFormSubmitted) {
      getCountries();
    }
  }, [stateCountries.countriesFormSubmitted]);

  useEffect(() => {
    stateCountries.countries.length &&
      stateCountries.countries.every((item) => item.data) &&
      dispatchCountries(actionCreator(SET_COUNTRIES_SELECTED, true));
  }, [stateCountries.countries]);

  useEffect(() => {
    if(stateCountries.countries.length && stateCountries.countries.every(item => item.additionalData)){
      makeBattleCalculations();
      dispatchCountries(actionCreator(SET_RESET_BATTLE, true));
    }
  }, [stateCountries.countries]);

  useEffect(() => {
    console.log(stateCountries);
  }, [stateCountries]);

  return {
    stateCountries,
    setCountriesParams,
    setCardCountry,
    resetCountry,
    startBattle,
    getCountryBattleLabel,
    restartBattle
  };
}
