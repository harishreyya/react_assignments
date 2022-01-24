import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        border: "5px solid purple",
        padding: "2%",
        background: "grey",
        fontSize: "24px",
        fontWeight: "600",
       
      }}>
            <Link to="/" className="linkTag">
              Home
            </Link>
     
            <Link to={`/Total`} className="linkTag">
              See Completed task{" "}
            </Link>
     
       
      
      </div>
    </>
  );
};