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

  return (
    <div className="container-admin">
      <h2 className="title-admin">ADMIN PANEL</h2>
      <div>
        <div className="list-group">
          <a
            href="#"
            className="list-group-item list-group-item-action active"
            aria-current="true"
          >
            Users
          </a>

          <NavLink
            to="/user/:name"
            className="list-group-item list-group-item-action"
          >
            {users.map((user) => (
              <div key={user._id}>
                <ol>
                  <li>{user.name}</li>
                  <li>{user.email}</li>
                  <li>{user.movie}</li>
                </ol>
                <div className="admin-buttons">
                  <button
                    onClick={() => {
                      handleDelete(users);
                    }}
                    className="delete-user"
                  >
                    borrar
                  </button>
                </div>
              </div>
            ))}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
