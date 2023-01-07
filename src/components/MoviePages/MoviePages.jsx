import "./MoviePages.scss"
import React from 'react'
import { NavLink, useNavigate } from "react-router-dom"


export default function MoviePages({page, setPage, masPages}){

    const nextPage = (page) =>{
        if(page != maxPage){
            setPage(page+1)
        }
    };

    return(
        <div>
        <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous" onClick={()=>setPage(page -1)}>
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item">
      <button className= "page-item">{page}</button>
    </li>
  
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next" onClick={()=>setPage(page +1)}>
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
    </div>
    )
}