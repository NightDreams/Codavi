const INITIAL_STATE = {
  listAmerica: [],
  listAfrica: [],
  listAsia: [],
  listEurope: [],
  listOceania: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "get_america_countries":
      return { ...state, listAmerica: action.payload };

    case "get_africa_countries":
      return { ...state, listAfrica: action.payload };

    case "get_asia_countries":
      return { ...state, listAsia: action.payload };

    case "get_europe_countries":
      return { ...state, listEurope: action.payload };

    case "get_oceania_countries":
      return { ...state, listOceania: action.payload };

    default:
      return state;
  }
};
