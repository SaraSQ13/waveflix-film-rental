import React, { useEffect, useState } from "react";
import { FilmRentalService } from "../../_services/FilmRentalService";
import { useNavigate } from "react-router-dom";
import "./Home.scss";
import Movie from "../../components/Movie/Movie";
import SearchBar from "../../components/SearchBar/SearchBar";

export function Home() {
  //hooks
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  //function
  const getPopularMovies = async () => {
    try {
      const res = await FilmRentalService.getPopularMovies();
      setMovies(res);
    } catch (error) {
      console.log(error.message || error);
    }
  };

  return (
    <div className="container">
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="h1 mt-5 mb-5 pb-5">Movie LIST</h1>
      <div className="movies-list">
        {movies.length > 0 &&
          movies.map((mov) => <Movie key={mov.id} movie={mov} />)}
      </div>
    </div>
  );
}
