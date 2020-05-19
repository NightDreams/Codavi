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
        populationAverage
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
