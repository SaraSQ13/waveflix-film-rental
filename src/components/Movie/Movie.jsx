import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
// import UserService from "../../_services/UserService";
import "./Movie.scss";


function Movie({ movie }) {
  const navigate = useNavigate();
  // const [rentedMovies, setRentedMovies] = useState([]);

  const getSingleMovie = (id) => {
    navigate(`/movie/${id}`);
  };

  // const handleRent = async (id) =>{
  //   const res = await UserService.getMovieSingleUser(id);
   
  //     setRentedMovies(res.data.data);
  //     navigate(`/users`)
  // }

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
