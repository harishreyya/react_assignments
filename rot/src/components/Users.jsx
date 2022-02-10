import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Users = ()=>{
const [users,setUsers] = useState([])
useEffect(()=>{
fetch("http://reqes.in/api/users")
.then((a)=> a.json())
.then(({data})=> setUsers(data));
},[]);





    return <div>
    {users.map((e,i)=>(
        
         <p key={i}>
   
    User {e.id} - <Link to ={`/users/${e.id}`}>{e.first_name}</Link>
   </p>
    ))}
        </div>
}