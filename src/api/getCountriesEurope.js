import axios from "axios";

export const getCountriesEurope = async () => {
  const url = "https://restcountries.eu/rest/v2/regionalbloc";

  const getEU = axios.get(`${url}/${"EU"}`);
  const getEFTA = axios.get(`${url}/${"EFTA"}`);
  const getCEFTA = axios.get(`${url}/${"CEFTA"}`);

  return new Promise((resolve, reject) => {
    axios
      .all([getEU, getEFTA, getCEFTA])
      .then(
        axios.spread((...responses) => {
          const countriesEurope = [];
          countriesEurope.push(...responses[0].data);
          countriesEurope.push(...responses[1].data);
          countriesEurope.push(...responses[2].data);
          resolve(countriesEurope);
        })
      )
      .catch((errors) => {
        reject(errors);
      });
  });
};
