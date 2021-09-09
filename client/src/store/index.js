import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import similarMovies from "./similarMovies/reducer";
import nowPlayingMovies from "./nowPlayingMovies/reducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  nowPlayingMovies,
  similarMovies,
});
const store = createStore(allReducer, applyMiddleware(thunk));
export default store;
