import React from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../App";
import SearchBar from "../SearchBar/SearchBar";
//logo de la app
import "./NavBar.scss";

export default function NavBar() {
  const { auth } = React.useContext(AuthContext);

  // const email = useSelector((state) => state.auth.email);
  const handleLogout = () => {
    TokenStorageService.logOut();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark fixed-top">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          WAVEFLIX
        </NavLink>
        <SearchBar />
        <nav>
          {auth.isAuth ? (
            <>
              <p>Welcome</p>

              <button onClick={handleLogout}>Logout</button>
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
              {auth.isAuth ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/profile" className="nav-link">
                      TestAdmin
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink onClick={handleLogout} className="nav-link">
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
