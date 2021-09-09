import actionType from "./actionType";

export const setMovies = (movies) => {
  return {
    type: actionType.FETCH_MOVIES,
    payload: movies,
  };
};

const fetchMoviesLoading = () => {
  return { type: actionType.FETCH_MOVIES_LOADING };
};

const fetchMoviesError = (err) => {
  return { type: actionType.FETCH_MOVIES_ERROR, payload: err };
};

export const fetchMovies = (page) => {
  return (dispatch) => {
    dispatch(fetchMoviesLoading());
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=a339ab6bb2d0a7c9b21ae954ac424b90&page=${page}`)
      .then((res) => res.json())
      .then(({ results }) => {
        dispatch(setMovies(results));
      })
      .catch((err) => {
        dispatch(fetchMoviesError(err));
      })
      .finally(() => dispatch(fetchMoviesLoading()));
  };
};
