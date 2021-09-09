import actionType from "./actionType";

const initialState = {
  similarMovies: [],
  loadingSimilarMovies: false,
  errorSimilarMovies: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.FETCH_SIMILAR_MOVIES:
      return {
        ...state,
        similarMovies: action.payload,
      };
    case actionType.FETCH_SIMILAR_LOADING:
      return {
        ...state,
        loadingSimilarMovies: !state.loadingSimilarMovies,
      };
    case actionType.FETCH_SIMILAR_ERROR:
      return {
        ...state,
        errorSimilarMovies: action.payload,
      };
    default:
      return state;
  }
}
