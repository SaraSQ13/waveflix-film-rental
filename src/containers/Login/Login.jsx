import React, { useState, useEffect } from "react";
import AuthService from "../../_services/AuthService";
import { json, useNavigate } from "react-router-dom";
import TokenStorageService from "../../_services/TokenStorageService";
import { validateLoginFormValues } from "../../_helpers/form-utilities";
import "./Login.scss";
import Background from "../../components/Background/Background";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/auth/authSlice";

export default function Login() {
  //const { auth, setAuth } = React.useContext(AuthContext);

  //hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const credentials = {
      email: formValues.email,
      password: formValues.password,
    };

    //verificar que no hay error
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      console.log("LOGIN...");
      handleLogin(credentials);
    }
  }, [isSubmit, formErrors]);

  const handleLogin = async (credentials) => {
    try {
      const res = await AuthService.login(credentials);
      console.log(res.data);
      TokenStorageService.saveToken(res.data.token);
      sessionStorage.setItem("userId", res.data.id);
      dispatch(login(res.data.user));

      if (res.data.role == "super_admin") {
        navigate("/admin");
      } else if (res.data.role == "user") {
        navigate("/users");
      }

      //navigate("/admin"); //aqui hariamos un switch para que depende del rol que tenga vaya a una pantalla o a otra.
    } catch (error) {
      console.log(error);
    }
  };

  //handlers (manipuladores de eventos)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //para que no haga por defecto el evento que tiene que hacer ese formulario

    setFormErrors(validateLoginFormValues(formValues));
    setIsSubmit(true);
    //verificar errores
    //actualizar estado de errores
  };
  return (
    <div>
      <div className="container pt-5 col-lg m-auto">
        <h2>Login</h2>

        <form className="text-start" noValidate onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formValues.email}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text form-text-error">
              {formErrors.email}
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formValues.password}
              onChange={handleChange}
            />
            <div id="emailHelp" className="form-text form-text-error">
              {formErrors.password}
            </div>
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="button">
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* <button onClick={() => login(credentials)}>Enviar Login</button> */}
    </div>
  );
}
