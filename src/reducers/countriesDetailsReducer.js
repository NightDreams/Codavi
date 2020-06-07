const INITIAL_STATE = {
  countriesWithMoreBedsList: [],
  loadingMore: false,
  errorMore: "",
  countriesWithFewerBedsList: [],
  loadingFewer: false,
  errorFewer: "",
  countriesSeggestions: [],
  loadingSeggestions: false,
  errorSuggestions: "",
  countryDetails: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // getTopEstimateCountrys
    case "get_more_beds":
      return {
        ...state,
        countriesWithMoreBedsList: action.payload.getTopEstimateCountrys,
        loadingMore: false,
      };

    case "loadingMore":
      return { ...state, loadingMore: true };

    case "error_more":
      return { ...state, errorMore: action.payload, loadingMore: false };

    // getBottomEstimateCountrys
    case "get_fewer_beds":
      return {
        ...state,
        countriesWithFewerBedsList: action.payload.getBottomEstimateCountrys,
        loadingFewer: false,
      };

    case "loadingFewer":
      return { ...state, loadingFewer: true };

    case "error_fewer":
      return { ...state, errorFewer: action.payload, loadingFewer: false };

    // getCountriesSuggestions
    case "get_suggestions":
      return {
        ...state,
        countriesSeggestions: action.payload,
        loadingSeggestions: false,
      };

    case "loadingSuggestions":
      return { ...state, loadingSeggestions: true };

    case "error_suggestions":
      return {
        ...state,
        errorSuggestions: action.payload,
        loadingSeggestions: false,
      };

    // Country details
    case "get_country_details":
      return {
        ...state,
        countryDetails: action.payload,
      };

    default:
      return state;
  }
};
