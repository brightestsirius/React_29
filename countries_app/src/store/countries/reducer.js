import {
  COUNTRIES_FORM_SUBMIT,
  SET_REGION_COUNTRIES,
  SET_REGION_COUNTRIES_SETTED,
  SET_COUNTRY
} from "./actions";

const INITIAL_STATE = {
  countries: [],
  countriesCount: 2,
  countriesRegion: `Europe`,
  countriesSubRegion: `Northern Europe`,
  countriesFormSubmitted: false,
  regionCountries: [],
  regionCountriesSetted: false,
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case COUNTRIES_FORM_SUBMIT:
      return {
        ...state,
        countriesFormSubmitted: true,
        countries: new Array(payload.countriesCount)
          .fill(0)
          .map((item, index) => ({ id: ++index })),
        ...payload,
      };
    case SET_REGION_COUNTRIES:
      return { ...state, regionCountries: payload };
    case SET_REGION_COUNTRIES_SETTED:
      return { ...state, regionCountriesSetted: payload };
    case SET_COUNTRY:
      return {...state, countries: state.countries.map(country => {
        if(country.id === payload.id){
          const currentCountry = state.regionCountries.find(item => item.name.common === payload.name);
          country.data = {
            name: {
              common: currentCountry.name.common,
              official: currentCountry.name.official
            },
            flag: currentCountry.flag
          }
        }
        return country;
      })}
    default:
      return state;
  }
};

export { reducer, INITIAL_STATE };
