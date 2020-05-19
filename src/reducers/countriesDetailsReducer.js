const INITIAL_STATE = {
  listCountriesMostPopulation: [],
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

    case "loading":
      return { ...state, loading: true };

    case "error":
      return { ...state, error: action.payload, loading: false };

    default:
      return state;
  }
};
