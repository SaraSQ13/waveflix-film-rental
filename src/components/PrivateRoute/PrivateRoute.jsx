import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../App";
import AuthService from "../../_services/AuthService";
import TokenStorageService from "../../_services/TokenStorageService";

export default function PrivateRoute({ children }) {
  const { auth, setAuth } = React.useContext(AuthContext);
  const { pathname } = useLocation();

  useEffect(() => {
    const checkToken = async () => {
      const token = TokenStorageService.getToken();
      try {
        // Make a request to the backend to validate the token
        const response = await AuthService.validateToken(token);
        if (!response.data.isValid) {
          setAuth({ isAuth: false, token: "" });
        } else {
          console.log("Set Auth to True");
          setAuth({ isAuth: true, token: token });
        }
      } catch (error) {
        setAuth({ isAuth: false, token: "" });
        console.error(error);
      }
    };
    checkToken();
  }, [pathname]);

  return auth.isAuth ? children : <Navigate to="/login" />;
}
