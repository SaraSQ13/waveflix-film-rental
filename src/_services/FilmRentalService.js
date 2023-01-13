import axios from "axios";
import { enviroment } from "../_enviroments/enviroments";

export const FilmRentalService = {};

FilmRentalService.getPopularMovies = async (page = 1) => {
//   const apiUrl = await axios.get(`http://localhost:3000/movie`);
  const apiUrl = await axios.get(`${enviroment.BASE_API_URL}/movie`);
  console.log(apiUrl.data.data);
  return apiUrl.data.data;
  // const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=2970e57761a644413443aedaa24bd8d1&language=es-ES&${page}=1`;
};

FilmRentalService.getSingleMovie = async (id) => {
//   const apiUrl = `http://localhost:3000/movie/${id}`;
  const apiUrl = `${enviroment.BASE_API_URL}/movie/${id}`;
  const res = await axios.get(apiUrl);
  console.log(res);
  return res;
};
