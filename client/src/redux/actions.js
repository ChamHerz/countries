import axios from "axios";

const hostname = "http://localhost:3001";

export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRY = "GET_COUNTRY";

export const getCountries = () => {
  return function (dispach) {
    axios
      .get(`${hostname}/api/countries`)
      .then((response) =>
        dispach({ type: GET_COUNTRIES, payload: response.data })
      );
  };
};
export const getCountry = (id) => {
  return function (dispach) {
    axios
      .get(`http://localhost:3001/countries/${id}`)
      .then((response) =>
        dispach({ type: GET_COUNTRY, payload: response.data })
      );
  };
};
