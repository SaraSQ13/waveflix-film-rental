import "./MovieDetail.scss";
import React, { useState, useEffect } from "react";
import { FilmRentalService } from "../../_services/FilmRentalService";

export default function MoviDetail() {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getsingleMovie();
  }, []);

  const getSingleMovie = async () =>{
    try{
        const res = await FilmRentalService.getSingleMovie(id);
        setMovie(res.data.data);
    }catch(error){
        console.log(error.message || error)
    }
  }
}
