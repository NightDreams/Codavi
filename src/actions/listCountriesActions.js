import axios from "axios";

const url = "https://restcountries.eu/rest/v2/region";

export const getAmericaCountries = () => (dispatch) => {
  axios
    .get(`${url}/americas`)
    .then((response) => {
      dispatch({
        type: "get_america_countries",
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAfricaCountries = () => (dispatch) => {
  axios
    .get(`${url}/africa`)
    .then((response) => {
      dispatch({
        type: "get_africa_countries",
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAsiaCountries = () => (dispatch) => {
  axios
    .get(`${url}/asia`)
    .then((response) => {
      dispatch({
        type: "get_asia_countries",
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getEuropeCountries = () => (dispatch) => {
  axios
    .get(`${url}/europe`)
    .then((response) => {
      dispatch({
        type: "get_europe_countries",
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getOceaniaCountries = () => (dispatch) => {
  axios
    .get(`${url}/oceania`)
    .then((response) => {
      dispatch({
        type: "get_oceania_countries",
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
