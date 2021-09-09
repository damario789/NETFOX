import actionType from "./actionType";

const initialState = {
  movies: [],
  loadingMovies: false,
  errorMovies: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.FETCH_MOVIES:
      let copyMovies = JSON.parse(JSON.stringify(state.movies));
      return {
        ...state,
        movies: copyMovies.concat(action.payload),
      };
    case actionType.FETCH_MOVIES_LOADING:
      return {
        ...state,
        loadingMovies: !state.loadingMovies,
      };
    case actionType.FETCH_MOVIES_ERROR:
      return {
        ...state,
        errorMovies: action.payload,
      };
    default:
      return state;
  }
}
