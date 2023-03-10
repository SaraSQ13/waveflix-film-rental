import React, { useState, useEffect } from "react";
import AuthService from "../../_services/AuthService";
import { json, useNavigate } from "react-router-dom";
import TokenStorageService from "../../_services/TokenStorageService";
import { validateLoginFormValues } from "../../_helpers/form-utilities";
import "./Register.scss";

export default function Register() {
  // const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  //hooks
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({ initialValues });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const credentials = {
      email: formValues.email,
      password: formValues.password,
      name: formValues.name,
    };

    //verificar que no hay error
    if (Object.keys(formErrors).length == 0 && isSubmit) {
      console.log("LOGIN...");
      register(credentials);
    }
    console.log("useEffect", formErrors);
  }, [formErrors]);

  const register = async (credentials) => {
    try {
      const res = await AuthService.register(credentials);
      console.log(res.data);
      TokenStorageService.saveToken(res.data.token);
      navigate("/login"); //aqui hariamos un switch para que depende del rol que tenga vaya a una pantalla o a otra.
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
    const { email, password } = e.target.elements;

    // dispatch(login(email.value));
    setFormErrors(validateLoginFormValues(formValues));
    setIsSubmit(true);
    //verificar errores
    //actualizar estado de errores
  };
  return (
    <div>
      <div className="container pt-5 col-lg m-auto">
        <h2>Register</h2>

        <form className="text-start" noValidate onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formValues.name}
              onChange={handleChange}
            />
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
