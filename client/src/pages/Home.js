import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import { fetchMovies } from "../store/nowPlayingMovies/action";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Home.css";

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { movies, loadingMovies } = useSelector((state) => state.nowPlayingMovies);
  const [page, setPage] = useState(1);

  window.onscroll = function (e) {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    dispatch(fetchMovies(page));
  }, [dispatch, page]);

  function handleDetails(movie) {
    history.push({
      pathname: "/details",
      state: { movie },
    });
  }

  return (
    <div>
      <div>{loadingMovies || !movies.length ? null : <Banner movies={movies} />}</div>
      <h1 className="category_title">Movies</h1>

      <div className="container__home">
        {movies.length > 0 &&
          movies.map((movie, index) => (
            <React.Fragment key={index}>
              {!movie.poster_path ? null : (
                <div className="card__container" onClick={() => handleDetails(movie)}>
                  <Cards movie={movie} />
                </div>
              )}
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default Home;
