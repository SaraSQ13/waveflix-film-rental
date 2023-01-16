import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Movie.scss";

function Movie({ movie }) {
  const navigate = useNavigate();

  const getSingleMovie = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="movie" id={movie.id}>
      <a>
        <p id="vote-average">{movie.vote_average}</p>
        <img
          className="img-movie"
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt=""
        />
      </a>
      <h3>{movie.title}</h3>
      <button className="button" onClick={() => getSingleMovie(movie.id)}>
        Ver más
      </button>
      <button className="button" onClick={() => getSingleMovie(movie.id)}>
        Alquilar
      </button>
    </div>
  );
}

export default Movie;
