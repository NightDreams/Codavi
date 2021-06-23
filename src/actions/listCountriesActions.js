import axios from "axios";

const url = "https://restcountries.eu/rest/v2/region";

const getContry = (country, TYPE, dispatch) => {
  axios
  .get(`${url}/${country}`)
  .then((response) => {
    dispatch({
      type: TYPE,
      payload: response.data,
    });
  })
  .catch((error) => {
    console.log(error);
  });
};

export const getAmericaCountries = () => (dispatch) => getContry("americas","get_america_countries", dispatch)
export const getAfricaCountries = () => (dispatch) => getContry("africa", "get_africa_countries", dispatch)
export const getAsiaCountries = () => (dispatch) => getContry("asia","get_asia_countries", dispatch)
export const getEuropeCountries = () => (dispatch) => getContry("europe", "get_europe_countries", dispatch)
export const getOceaniaCountries = () => (dispatch) => getContry("oceania", "get_oceania_countries", dispatch)
