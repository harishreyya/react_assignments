import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div>
            <Link to = "/">home</Link>
            <Link to = "/about">about</Link>
        </div>
    )
}