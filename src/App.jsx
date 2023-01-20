import { createContext, useEffect, useState } from "react";
import "./App.scss";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Home } from "./containers/Home/Home";
import { Header } from "./components/Header/Header";
import Login from "./containers/Login/Login";
import Admin from "./containers/Admin/Admin";
import MovieDetail from "./containers/MovieDetail/MovieDetail";
import Register from "./containers/Register/Register";
import UserProfile from "./containers/UserDetail/UserDetail";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/movie" />} />
          <Route path="/movie" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/userDetails" element={<UserProfile />} />
          <Route
            path="/admin"
            element={
              //<PrivateRoute>
                <Admin />
              //</PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
