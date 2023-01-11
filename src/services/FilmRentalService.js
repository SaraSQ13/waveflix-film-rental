import axios from "axios";

export const FilmRentalService = {};

FilmRentalService.getPopularMovies = async (page = 1) => {
    // const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=2970e57761a644413443aedaa24bd8d1&language=es-ES&${page}=1`;
    const apiUrl = await axios.get(`http://localhost:3000/movie`)
    console.log(apiUrl.data.data)
    return (apiUrl.data.data);
};

FilmRentalService.getMovieGenre = async (genre) =>{
    const apiUrl = `https://api.themoviedb.org/3/${genre}/movie/list?api_key=2970e57761a644413443aedaa24bd8d1&language=es-ES`;

    return await axios.get(apiUrl);
}