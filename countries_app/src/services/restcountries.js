import axios from "axios";

const API = `https://restcountries.com/v3.1`;

const service = {
  getSubRegionCountries: (subregion) =>
    axios.get(API + `/subregion/${subregion}`).then(({ data }) => data),
};

export default service;
