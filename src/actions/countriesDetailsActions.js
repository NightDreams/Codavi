import { request } from "graphql-request";

export const getMostPopulation = () => (dispatch) => {
  dispatch({
    type: "loading",
  });
  const query = ` 
    {
      getCountrys{
        _id
        code
        bedsTotal
        bedsAverage
        estimatedBedsTotal
        typebed{
          type
          population
        }
        restrictions{
          dateStart
        }
      }
    }
    `;
  request("https://app-backend-graphql.herokuapp.com/", query)
    .then((data) =>
      dispatch({
        type: "get_most_population",
        payload: data.getCountrys.slice(0, 20),
      })
    )
    .catch((error) => {
      dispatch({
        type: "error",
        payload: error.message,
      });
    });
};

export const getCountryDetails = (countryCode) => (dispatch) => {
  //   dispatch({
  //     type: "loading",
  //   });
  console.log("code" + countryCode);
  const query = `query get($code: String!) {
        getCountry(code: $code) {
          _id
          code
          bedsTotal
          typebed{
            type
            population
          }
          restrictions{
            dateStart
          }
        }
      }`;
  countryCode &&
    request("https://app-backend-graphql.herokuapp.com/", query, {
      code: `${countryCode}`,
    })
      .then((data) => {
        dispatch({
          type: "get_country_details",
          payload: data.getCountry,
        });
        console.log(data.getCountry);
      })
      .catch((error) => {
        dispatch({
          type: "error",
          payload: error.message,
        });
      });
};
