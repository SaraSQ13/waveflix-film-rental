import "./MoviePages.scss"
import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"


export default function MoviePages({page, setPage, pages: total_pages}){

    return(
        <div>
        <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous" onClick={()=>{
        if(page <= 0){
          return;
        }
      setPage(page -1)}}>
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item">
      <button className= "page-item">{page} of {total_pages}</button>
    </li>
  
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next" onClick={()=>{
        if(page >= 36553){
          return;
        }
      setPage(page +1)}}>
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    </div>
    )
}