import React, { useEffect } from "react";
import { fetchSimilarMovies } from "../store/similarMovies/action";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Details from "../components/Details";
import Cards from "../components/Cards";
import "./Home.css";

function DetailsPage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const { similarMovies } = useSelector((state) => state.similarMovies);

  useEffect(() => {
    dispatch(fetchSimilarMovies(location.state.movie.id));
  }, [dispatch, location.state.movie.id]);

  function handleDetails(movie) {
    history.push({
      pathname: "/details",
      state: { movie },
    });
  }

  return (
    <>
      <div>
        <Details movie={location.state.movie} />
      </div>
      <h1 className="category_title">Similar Movies</h1>
      <div className="container__home">
        {similarMovies.length > 0 &&
          similarMovies.map((movie, index) => (
            <React.Fragment key={index}>
              {!movie.poster_path ? null : (
                <div className="card__container" onClick={() => handleDetails(movie)}>
                  <Cards movie={movie} />
                </div>
              )}
            </React.Fragment>
          ))}
      </div>
    </>
  );
}

export default DetailsPage;
