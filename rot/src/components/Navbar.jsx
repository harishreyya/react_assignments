import { Link } from "react-router-dom"

export const Navbar =()=>{
    return <div>
        <Link to= "/">Home</Link><br />
 
        <Link to ="/About">About</Link>       <br />
        
        <Link to ="/Contact">Contact</Link> <br />
        <Link to = "/users">users</Link>
    </div>
}