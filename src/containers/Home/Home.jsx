import React, {useEffect, useState} from 'react'
import { FilmRentalService } from '../../services/FilmRentalService'
import { useNavigate } from 'react-router-dom'
import "./Home.scss"
import Movie from '../../components/Movie/Movie'
import MoviePages from '../../components/MoviePages/MoviePages'
import SearchBar from '../../components/SearchBar/SearchBar'


export function Home(){
    //hooks
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);


    useEffect(()=>{
        getPopularMovies(page)
    }, [page])

    
    //function
    const getPopularMovies = async (page) =>{
        try{
            const res = await FilmRentalService.getPopularMovies(page)
            setMovies(res.data.results)
            setPages(res.data.page)
            
        } catch (error){
            console.log(error.message || error);
        }
    };

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
        <MoviePages page={page} pages={pages} setPage={setPage}/>
        <div className="movies-list">
        {movies.length>0 &&
        movies.map((mov)=> (<Movie key={mov.id} movie={mov}/>))}
        </div>
        <MoviePages/>
    </div>
    )

}