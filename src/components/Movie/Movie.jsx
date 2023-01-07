import React from "react";
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";
import "./Movie.scss"

function Movie ({movie}){
    const navigate = useNavigate();

    const selectMovie = (movie) => {
        navigate(`/movie/${movie.id}`);
    }

    return (
    
    <div className = "movie" id={movie.id}>
    <a>
    <p id="vote-average">{movie.vote_average}</p>
    <img className= "img-movie" src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="" />
    </a>
    <h3>{movie.title}</h3>
    <p>{movie.release_date}</p>
            <button className="button" onClick={()=>selectMovie(movie)}>Alquilar</button>
        </div>
    )
}

export default Movie 