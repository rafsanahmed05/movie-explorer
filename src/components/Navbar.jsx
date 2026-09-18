import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🎬 Movie Explorer</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>

        <Link to="/movies" className="navbar-button">
          Explore Movies
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;