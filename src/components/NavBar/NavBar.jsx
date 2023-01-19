import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import SearchBar from "../SearchBar/SearchBar";
//logo de la app
import "./NavBar.scss";

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state)=> state.auth.user);

 
  const handleLogout = () => {
    TokenStorageService.logOut();
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark fixed-top">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          WAVEFLIX
        </NavLink>
       
        <nav>
          {isLoggedIn ? (
            <>
              <p>Welcome, {user}</p>

              <button>
                  <NavLink to= "/movie" onClick={handleLogout} className="nav-link">
                      Logout
                    </NavLink>
              </button>
            </>
          ) : (
            <button onClick={() => dispatch(login())}>Login</button>
          )}
        </nav>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Menú
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={(navData) =>
                    navData.isActive ? "active-style" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/rentals"
                  className={(navData) =>
                    navData.isActive ? "active-style" : "nav-link"
                  }
                >
                  Alquileres
                </NavLink>
              </li>
              {isLoggedIn ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/profile" className="nav-link">
                      Sara, Admin
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to= "/movie" onClick={handleLogout} className="nav-link">
                      Logout
                    </NavLink>
                  </li>
                </>
              ) : (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Iniciar sesión
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <NavLink to="/login" className="dropdown-item">
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/register" className="dropdown-item">
                        Regístrate
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink to="/admin" className="dropdown-item">
                        Admin
                      </NavLink>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
            <SearchBar />
          </div>
        </div>
      </div>
    </nav>
  );
}
