import axios from "axios";

export const getCountriesAsia = async () => {
  const url = "https://restcountries.eu/rest/v2/regionalbloc";

  const getEEU = axios.get(`${url}/${"EEU"}`);
  const getASEAN = axios.get(`${url}/${"ASEAN"}`);
  const getSAARC = axios.get(`${url}/${"SAARC"}`);

  return new Promise((resolve, reject) => {
    axios
      .all([getEEU, getASEAN, getSAARC])
      .then(
        axios.spread((...responses) => {
          const countriesAsia = [];
          countriesAsia.push(...responses[0].data);
          countriesAsia.push(...responses[1].data);
          countriesAsia.push(...responses[2].data);
          resolve(countriesAsia);
        })
      )
      .catch((errors) => {
        reject(errors);
      });
  });
};
