import React, { useEffect, useState } from "react";
import UserService from "../../_services/UserService";
import TokenStorageService from "../../_services/TokenStorageService";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import "./Admin.scss";

export default function Admin() {
  const navigate = useNavigate();
  const token = TokenStorageService.getToken();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers(token);
  }, []);

  const getAllUsers = async (token) => {
    try {
      const res = await UserService.getAllUsers(token);
      setUsers(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error.message || error);
    }
  };

  //handle detele user
  const handleDelete = async (userToDelete) => {
    const res = await UserService.deleteUser(userToDelete);
    console.log(res);
    await getAllUsers(token);
    console.log(users);
  };
  const userRentMovies = (movies) => {
    return movies.map((movie) => {
      return <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="" />;
    });
  };
  
  return (
    <div className="card">
      {users.map((user) => (
        <div className= "card" key={user._id}>
          <ol className="card-body">
            <li className= "card-title">Usuario: {user.name}</li>
            <li>Email: {user.email}</li>
            <li>Rol: {user.role}</li>
            <li>{userRentMovies(user.movies)}</li>
            <button
              onClick={() => {
                handleDelete(users.user);
              }}
              className="delete-user"
            >
              Borrar usuario
            </button>
          </ol>

          <div className="admin-buttons">
          </div>
        </div>
      ))}
    </div>
  );
}
