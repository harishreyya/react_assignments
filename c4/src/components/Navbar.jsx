import { Link } from "react-router-dom"
export const Navbar = ()=>{
    return <div id="navbar">
        <Link to="/">Home</Link> 
        
        <Link to="/Show">Data</Link>
    </div>
}