import React from 'react'
import AuthService from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';
import TokenStorageService from '../../services/TokenStorageService';

export default function Login() {
    const navigate = useNavigate();

    const credentials = {
        email: "super@super.com",
        password: "123456",
    };

    const login = async (credentials)=>{
       try {
	 const res = await AuthService.login(credentials)
	        console.log(res.data);
          TokenStorageService.saveToken(res.data.token);
            navigate('/admin') //aqui hariamos un switch para que depende del rol que tenga vaya a una pantalla o a otra.
} catch (error) {
    console.log(error);
	
}
    }
  return (
    <div>
        <h2>Login</h2>
        <button onClick={()=>login(credentials)}>Enviar Login</button>
    </div>
  )
}
