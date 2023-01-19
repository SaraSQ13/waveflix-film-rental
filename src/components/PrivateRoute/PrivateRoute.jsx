import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
//import { AuthContext } from "../../App";
import AuthService from "../../_services/AuthService";
import TokenStorageService from "../../_services/TokenStorageService";

export default function PrivateRoute({ children }) {
  //const { auth, setAuth } = React.useContext(AuthContext);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const { pathname } = useLocation();

  useEffect(() => {
    const checkToken = async () => {
      const token = TokenStorageService.getToken();
      try {
        // Make a request to the backend to validate the token
        const response = await AuthService.validateToken(token);
        if (!response.data.isValid) {
          dispatch();
          //setAuth({ isAuth: false, token: "" });
        } else {
          console.log("Set Auth to True");
          //setAuth({ isAuth: true, token: token });
        }
      } catch (error) {
        dispatch();
        //setAuth({ isAuth: false, token: "" });
        console.error(error);
      }
    };
    checkToken();
  }, [pathname]);

  return isLoggedIn ? children : <Navigate to="/login" />;
}
