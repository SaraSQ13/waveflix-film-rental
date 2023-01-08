import React from 'react'
import {useEffect, useState} from 'react'
import {Navigate, NavLink} from "react-router-dom"
import "./SearchBar.scss"

export default function SearchBar(){
  
    return(
        <div>
             <form className=" d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Película, género, actor" aria-label="Search"/>
          <button className="button" type="submit">Search</button>
        </form>
        </div>
    )
}