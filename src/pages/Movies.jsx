import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    if (search.trim() === "") {
      fetch("https://api.tvmaze.com/shows")
        .then((response) => response.json())
        .then((data) => {
          setMovies(data);
          setLoading(false);
        })
        .catch(() => {
          setMovies([]);
          setLoading(false);
        });

      return;
    }

    fetch(
      `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(search)}`
    )
      .then((response) => response.json())
      .then((data) => {
        const shows = data.map((item) => item.show);
        setMovies(shows);
        setLoading(false);
      })
      .catch(() => {
        setMovies([]);
        setLoading(false);
      });
  }, [search]);

  return (
    <main className="movies-page">
      <h1>Explore Movies</h1>

      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search for a movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <p>Loading movies...</p>}

      {!loading && movies.length === 0 && (
        <p>No movies found.</p>
      )}

      {!loading && movies.length > 0 && (
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onDetails={(movie) => setSelectedMovie(movie)}
            />
          ))}
        </div>
      )}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </main>
  );
}

export default Movies;