import axios from "axios";

export const getCountriesAmerica = async () => {
  const url = "https://restcountries.eu/rest/v2/regionalbloc";

  const getUSAN = axios.get(`${url}/${"USAN"}`);
  const getCAIS = axios.get(`${url}/${"CAIS"}`);
  const getNAFTA = axios.get(`${url}/${"NAFTA"}`);

  return new Promise((resolve, reject) => {
    axios
      .all([getUSAN, getCAIS, getNAFTA])
      .then(
        axios.spread((...responses) => {
          const countriesAmerica = [];
          countriesAmerica.push(...responses[0].data);
          countriesAmerica.push(...responses[1].data);
          countriesAmerica.push(...responses[2].data);
          resolve(countriesAmerica);
        })
      )
      .catch((errors) => {
        reject(errors);
      });
  });
};
