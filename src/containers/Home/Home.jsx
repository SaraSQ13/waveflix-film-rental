import React, {useEffect, useState} from 'react'
import { FilmRentalService } from '../../_services/FilmRentalService'
import { useNavigate } from 'react-router-dom'
import "./Home.scss"
import Movie from '../../components/Movie/Movie'
// import MoviePages from '../../components/MoviePages/MoviePages'
import SearchBar from '../../components/SearchBar/SearchBar'


export function Home(){
    //hooks
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [total_pages, setTotal_Pages] = useState(1);
   // const [genre, setGenre] = useState([]);


    useEffect(()=>{
        getPopularMovies(page)
    }, [page])

   // useEffect(()=>{
     //   getMovieGenre(genre)
    //})

    
    //function
    const getPopularMovies = async (page) =>{
        try{
            const res = await FilmRentalService.getPopularMovies(page)
            setMovies(res)
            setTotal_Pages(res.data.total_pages)
            
        } catch (error){
            console.log(error.message || error);
        }
    };

    // const getMovieGenre = async (genre) =>{
    //     try{
    //         const res = await FilmRentalService.getMovieGenre(genre)
    //         setGenre(res.genres)
    //     }catch (error){
    //         console.log(error.message || error);
    //     }
    // };

    return (
        <div className= "container">
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
            <SearchBar className= "bar"/>
            {/* <MoviePages page={page} pages={total_pages} setPage={setPage}/> */}
            <div className="movies-list">
            {movies.length>0 &&
            movies.map((mov)=> (<Movie key={mov.id} movie={mov}/>))}
            </div>
            {/* <MoviePages/> */}
        </div>
    )

}