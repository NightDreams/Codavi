import { request } from "graphql-request";

const requestTunk = (query, dispatch, typeDispatch, typeError) => {
  return request("https://app-backend-graphql.herokuapp.com/", query)
    .then((data) => {
      dispatch({
        type: typeDispatch,
        payload: data,
      });
    })
    .catch((error) => {
      dispatch({
        type: typeError,
        payload: error.message,
      });
    });
};

export const getCountriesWithMoreBedsList = () => (dispatch) => {
  dispatch({
    type: "loadingMore",
  });
  const query = ` 
    {
      getTopEstimateCountrys{
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

  requestTunk(query, dispatch, "get_more_beds", "error_more");
};

export const getCountriesWithFewerBedsList = () => (dispatch) => {
  dispatch({
    type: "loadingFewer",
  });
  const query = `
    {
      getBottomEstimateCountrys{
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
  requestTunk(query, dispatch, "get_fewer_beds", "error_fewer");
};

export const getCountryDetails = (countryCode) => (dispatch) => {
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
      })
      .catch((error) => {
        dispatch({
          type: "error",
          payload: error.message,
        });
      });
};
