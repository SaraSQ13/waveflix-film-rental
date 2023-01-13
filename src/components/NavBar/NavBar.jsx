import React from 'react'
import {Navigate, NavLink, useNavigate} from "react-router-dom"
import SearchBar from '../SearchBar/SearchBar';
//logo de la app
import "./NavBar.scss"

export default function NavBar(){
  

    let activeClassName = "active-link";
    return (
        <div>
        <nav className="navbar navbar-dark  fixed-top">
  <div className="container-fluid">
    <NavLink to= "/" className="navbar-brand" >WAVEFLIX</NavLink>
   <SearchBar/>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menú</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active" aria-current="page" >Home</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Alquileres</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Iniciar sesión
            </a>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li><NavLink to="/login" className="dropdown-item" href="#">Login</NavLink></li>
              <li><a className="dropdown-item" href="#">Regístrate</a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="#">Admin</a></li>
            </ul>
          </li>
        </ul>
        <SearchBar/>
      </div>
    </div>
  </div>
</nav>
</div>
    )
}