import axios from "axios";

export const getCountriesAfrica = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get("https://restcountries.eu/rest/v2/regionalbloc/AU")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
