import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import UserService from "../../_services/UserService";
import "./Movie.scss";
import { useSelector, useDispatch } from "react-redux";

function Movie({ movie }) {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const getSingleMovie = (id) => {
    navigate(`/movie/${id}`);
  };

  const handleRentMovie = async () => {
    await UserService.rentMovie(user._id, movie);
    navigate("/userDetails");
    console.log(isLoggedIn);
    console.log(user);
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
      <button className="button" onClick={handleRentMovie}>
        Alquilar
      </button>
      {/* //   <button onClick={handleRent}>Alquilar prueba</button>
    // <ul>
    //   {rentedMovies.map(movie => (
    //     <li key={movie.id}>{movie.title}</li>
    //   ))}
    // </ul>  */}
    </div>
  );
}

export default Movie;
