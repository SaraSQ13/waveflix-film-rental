//un servicio para que lea a los usuarios

import axios from "axios";

const UserService = {};

UserService.getAllUsers = async (token)=>{

    const apiUrl = `http://localhost:3000/movie` + '/users'
    const config = {
        headers: {Authorization: `Bearer ${token}`},
    };

    return await axios.get(apiUrl, config); 

};

export default UserService;