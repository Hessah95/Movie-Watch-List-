import moviesReducer from "./movies";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  moviesState: moviesReducer
});
export default rootReducer;
