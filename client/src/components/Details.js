import React from "react";
import "./Details.css";

function Details({ movie }) {
  return (
    <>
      {!movie ? null : (
        <header
          className="details"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="details__contents">
            <div className="details_title">
              <div className="scroll_details">
                <h1>{movie?.title}</h1>
              </div>
            </div>
            <div className="details_release_year">
              <h1>{movie.release_date.split("-")[0]}</h1>
            </div>
            <div className="details__description">
              <h1>{movie?.overview}</h1>
            </div>
          </div>
          <div className="details--fadeBottom" />
        </header>
      )}
    </>
  );
}

export default Details;
