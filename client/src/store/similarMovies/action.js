import actionType from "./actionType";

export const setSimilarMovies = (similarMovies) => {
  return {
    type: actionType.FETCH_SIMILAR_MOVIES,
    payload: similarMovies,
  };
};

const fetchSimilarMoviesLoading = () => {
  return { type: actionType.FETCH_SIMILAR_MOVIES_LOADING };
};

const fetchSimilarMoviesError = (err) => {
  return { type: actionType.FETCH_SIMILAR_MOVIES_ERROR, payload: err };
};

export const fetchSimilarMovies = (id) => {
  return (dispatch) => {
    dispatch(fetchSimilarMoviesLoading());
    fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=a339ab6bb2d0a7c9b21ae954ac424b90&language=en-US&page=1`)
      .then((res) => res.json())
      .then(({ results }) => {
        dispatch(setSimilarMovies(results));
      })
      .catch((err) => {
        dispatch(fetchSimilarMoviesError(err));
      })
      .finally(() => dispatch(fetchSimilarMoviesLoading()));
  };
};
