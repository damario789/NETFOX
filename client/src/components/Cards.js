import React from "react";
import "./Cards.css";

function Cards({ movie }) {
  const baseUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <div className="cards">
      <img className="rounded" src={baseUrl + movie.poster_path} alt="" />
    </div>
  );
}

export default Cards;
