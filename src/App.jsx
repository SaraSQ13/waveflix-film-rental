import { createContext, useEffect, useState } from "react";
import "./App.scss";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./containers/Home/Home";
import { Header } from "./components/Header/Header";
import Login from "./containers/Login/Login";
import Admin from "./containers/Admin/Admin";
import MovieDetail from "./containers/MovieDetail/MovieDetail";
import Register from "./containers/Register/Register";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const AuthContext = createContext({
  isAuth: false,
  token: "",
  setAuth: () => {},
});

function App() {
  const [auth, setAuth] = useState({ isAuth: false, token: "" });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/movie" />} />
            <Route path="/movie" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <Admin />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
