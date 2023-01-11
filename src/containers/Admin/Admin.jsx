import React, {useEffect, useState} from 'react'
import UserService from '../../services/UserService'
import TokenStorageService from '../../services/TokenStorageService'


export default function Admin() {
  const token = TokenStorageService.getToken();
  const [users, setUsers] = useState([])
useEffect(()=>{
  getAllUsers(token);
})

  const getAllUsers = async () =>{
    try{
        const res = await UserService.getAllUsers(token)
        setUsers(res.data.resutls)
      
        
    } catch (error){
        console.log(error.message || error);
    }
};

const handleLogout = ()=>{
  TokenStorageService.logOut();
};

  return (
    <div>
        <h2>Admin panel</h2>
        <div>
          {users.map((user)=>(
            <div key={user._id}>{user.name}</div>
          ))}
        </div>
        <button onClick={handleLogout}>Logout</button>
        
    </div>
  )
}
