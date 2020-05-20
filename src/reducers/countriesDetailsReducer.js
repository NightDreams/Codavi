const INITIAL_STATE = {
  listCountriesMostPopulation: [],
  countryDetails: {},
  loading: false,
  error: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "get_most_population":
      return {
        ...state,
        listCountriesMostPopulation: action.payload,
        loading: false,
      };

    case "get_country_details":
      return {
        ...state,
        countryDetails: action.payload,
      };

    case "loading":
      return { ...state, loading: true };

    case "error":
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
