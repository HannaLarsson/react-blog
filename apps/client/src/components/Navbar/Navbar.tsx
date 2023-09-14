import { Link } from 'react-router-dom';

export const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>Hanna's Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          color: "white",
          backgroundColor: "#f1356d",
          borderRadius: '8px'
        }}>
          New Blog
        </Link>
      </div>
    </nav>
   );
}