import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";

export const UsersDetails = () => {
    
    const {id} = useParams () ;

    const [users,setUsers] = useState({});

    useEffect(()=>{
  
    axios.get(`https://reqres.in/api/users/${id}`).then(({data}) =>{
  
        setUsers(data.data);
  
    });
  
    },[]) ;

console.log(users)

    return <div> User ID:{id}

    <img src={users.avatar} alt="" />

    </div>

}