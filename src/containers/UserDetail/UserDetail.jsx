import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateMovies } from "../../features/auth/authSlice";
import UserService from "../../_services/UserService";
import "./UserDetail.scss";

export default function UserProfile() {
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const moviesUser = useSelector((state) => state.auth.movies);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      try {
        UserService.getMoviesFromUser(user.name).then((res) => {
          console.log(res.data.movies);
          dispatch(updateMovies([...res.data.movies]));
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Necesitas iniciar sesión");
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <h2>Hola, {user.name}</h2>
      <h2>Estas son tus películas alquiladas:</h2>
      {moviesUser.map((movie) => (
        <div className="movie-rent" key={movie._id}>
          {movie.title}
          
          <img
            src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
            className="img-fluid mb-4 mb-md-0"
            alt="..."
          />
        </div>
      ))}
    </div>
  );
}
