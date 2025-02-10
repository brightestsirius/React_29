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
} from "./actions";

const DEFAULT_STATE = {
  countries: [],
  regionCountries: [],
  countriesCount: 2,
  countriesRegion: `Europe`,
  countriesFormSubmitted: false,
  countriesSelected: false,
  battleCountries: [],
  resetBattle: false
};

const initialState = DEFAULT_STATE;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_COUNTRIES_PARAMS:
      return {
        ...state,
        countriesFormSubmitted: true,
        countries: [
          ...Array(payload.countriesCount)
            .fill(0)
            .map((item, index) => ({ id: ++index })),
        ],
        ...payload,
      };
    case SET_REGION_COUNTRIES:
      return { ...state, regionCountries: payload };
    case SET_COUNTRY:
      return {
        ...state,
        countries: state.countries.map((item) => {
          if (item.id === payload.id) item = payload;
          return item;
        }),
      };
    case RESET_COUNTRY:
      return {
        ...state,
        countries: state.countries.map((item) => {
          if (item.id === payload) item = { id: item.id };
          return item;
        }),
      };
    case SET_COUNTRIES_SELECTED:
      return { ...state, countriesSelected: payload };
    case SET_COUNTRIES_ADDITIONAL_INFO:
      return {
        ...state,
        countries: state.countries.map((item, index) => {
          return { ...item, additionalData: payload[index] };
        }),
      };
    case SET_RESET_BATTLE:
      return {...state, resetBattle: payload}
    case SET_BATTLE_RESULT:
      return {...state, battleCountries: payload}
    case RESET_BATTLE:{
      return DEFAULT_STATE;
    }
    default:
      return state;
  }
};

export { reducer, initialState };