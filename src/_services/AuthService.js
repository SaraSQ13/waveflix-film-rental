import axios from "axios";
import { enviroment } from "../_enviroments/enviroments";
const AuthService = {};

// const authApiUrl = `http://localhost:3000` + "/auth";
const authApiUrl = `${enviroment.BASE_API_URL}` + "/auth";

AuthService.login = async (credentials) => {
  return await axios.post(authApiUrl + "/login", {
    email: credentials.email,
    password: credentials.password,
  });
};

AuthService.register = async (user) => {
  return await axios.post(authApiUrl + "/register", {
    name: user.name,
    email: user.email,
    password: user.password,
  });
};

AuthService.validateToken = async (token) => {
  return await axios.post(authApiUrl + "/validate-token", { token });
};

export default AuthService;
