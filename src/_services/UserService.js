//un servicio para que lea a los usuarios

import axios from "axios";
import { enviroment } from "../_enviroments/enviroments";

const UserService = {};

UserService.getAllUsers = async (token) => {
  // const apiUrl = `http://localhost:3000` + "/users";
  const apiUrl = `${enviroment.BASE_API_URL}` + "/users";
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return await axios.get(apiUrl, config);
};

UserService.getMoviesFromUser = async (name) => {
  const apiUrl = `${enviroment.BASE_API_URL}/users/users/${name}`;
  const res = await axios.get(apiUrl);
  return res.data;
}



UserService.rentMovie = async (userId, movie) => {
  try {
    const apiURL = `${enviroment.BASE_API_URL}/users/users/${userId}/rent`;
    const res = await axios.patch(apiURL, movie);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
UserService.deleteMovie = async (userId, movieId) => {
  try {
    const apiURL = `${enviroment.BASE_API_URL}/users/users/${userId}/delete/${movieId}`;
    const res = await axios.patch(apiURL, movieId);

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

UserService.deleteUser = async (user) => {
  try{
     const apiUrl = `${enviroment.BASE_API_URL}/users/users/delete/${user._id}`;
     const res = await axios.delete(apiUrl);

     return res.data;

  }catch (error){
     console.log(error);

  }
};

export default UserService;
