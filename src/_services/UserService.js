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

export default UserService;
