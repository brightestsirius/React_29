import axios from "axios";

const API = `https://restcountries.com/v3.1`;

const service = {
  getRegionCountries: (region) =>
    axios.get(API + `/region/${region}`).then(({ data }) => data),
  getCountry: (name) =>
    axios.get(API + `/name/${name}`).then(({ data }) => data),
};

export default service;
