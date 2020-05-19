import { combineReducers } from "redux";
import listCountriesReducer from "./listCountriesReducer";
import countriesDetailsReducer from "./countriesDetailsReducer";

export default combineReducers({
  listCountriesReducer,
  countriesDetailsReducer,
});
