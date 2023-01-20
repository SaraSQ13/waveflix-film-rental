import "./MovieDetail.scss";
import React, { useState, useEffect } from "react";
import { FilmRentalService } from "../../_services/FilmRentalService";
import { useNavigate, useParams } from "react-router-dom";
import UserService from "../../_services/UserService";
import { useDispatch, useSelector } from "react-redux";

export default function MovieDetail() {
  const navigate = useNavigate;
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const [rentedMovies, setRentedMovies] = useState([]);

  useEffect(() => {
    getSingleMovie(id);
  }, []);

  const getSingleMovie = async (id) => {
    try {
      const res = await FilmRentalService.getSingleMovie(id);
      console.log(res.data.data);
      setMovie(res.data.data);
    } catch (error) {
      console.log(error.message || error);
    }
  };

  // const handleRent = async (id) => {
  //   const res = await UserService.getMovieSingleUser(id);
  //   setRentedMovies(res.data.data);
  //   navigate(`/users`);
  // };

  // const handleRentMovie = async () => {
  //   try {
  //     const res = await UserService.rentMovie(movie);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   navigate(`/users/${id}`);
  // };

  const handleRentMovie =  () => {
    // const userId = sessionStorage.getItem("userId");
    // console.log(userId);
    // console.log(id)
    // await UserService.rentMovie(userId, id);
    // navigate("/movies");
    console.log(isLoggedIn);
    console.log(user);
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
                  src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`}
                  className="img-fluid mb-4 mb-md-0"
                  alt="..."
                />
              </div>
              <div className="col-md-8 text-start">
                <h1 className="h1 fw-bold  mb-3">
                  {movie.title} <span className="fw-lighter"></span>
                </h1>
                <div className="mb-4">{`(${movie.original_language.toUpperCase()}) ${
                  movie.release_date
                }`}</div>
                <div className="mb-4 vote-average">{movie.vote_average}</div>
                <h5 className="fw-bold">Overview</h5>
                <p className="fs-5">{movie.overview}</p>
                <div>
                  <button onClick={handleRentMovie}>Alquilar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
