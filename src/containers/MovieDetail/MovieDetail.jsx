import "./MovieDetail.scss";
import React, { useState, useEffect } from "react";
import { FilmRentalService } from "../../_services/FilmRentalService";

import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getSingleMovie(id);
  }, []);

  const getSingleMovie = async (id) => {
    try {
      const res = await FilmRentalService.getSingleMovie(id);
      console.log(res.data.data)
      setMovie(res.data.data);
    } catch (error) {
      console.log(error.message || error);
    }
  };


  return (
    <>
      {movie.id && (
        <div className="backdrop-container">
          <div
            className="backdrop-background"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
            }}
          ></div>
          <div className="container pt-5 pb-5">
            <div className="row">
              <div className="col-md-4">
                <img
                  src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  className="img-fluid mb-4 mb-md-0"
                  alt="..."
                />
              </div>
              <div className="col-md-8 text-start">
                <h1 className="h1 fw-bold  mb-3">
                  {movie.title}{" "}
                  <span className="fw-lighter">
                    
                  </span>
                </h1>
                <div className="mb-4">{`(${movie.original_language.toUpperCase()}) ${
                  movie.release_date
                }`}</div>
                <div className="mb-4 vote-average">{movie.vote_average}</div>
                <h5 className="fw-bold">Overview</h5>
                <p className="fs-5">{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
