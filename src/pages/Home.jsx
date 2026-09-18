import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Movies</h1>

          <p>
            Explore amazing movies and TV shows from around the world.
            Find your favorite titles and discover something new to watch.
          </p>

          <Link to="/movies" className="hero-button">
            Explore Now
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;