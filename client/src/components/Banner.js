import React, { useState, useEffect } from "react";
import "./Banner.css";

function Banner({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState("");
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  useEffect(() => {
    if (movies) {
      setSelectedMovie(movies[Math.floor(Math.random() * movies.length - 1)]);
    }
  }, [movies]);
  return (
    <>
      {!selectedMovie ? null : (
        <header
          className="banner"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="banner__contents">
            <div className="banner_title">
              <div className="scroll_banner">
                <h1>{selectedMovie?.title}</h1>
              </div>
            </div>
            <h1 className="banner__description">{truncate(`${selectedMovie?.overview}`, 150)}</h1>
          </div>
          <div className="banner--fadeBottom" />
        </header>
      )}
    </>
  );
}

export default Banner;
