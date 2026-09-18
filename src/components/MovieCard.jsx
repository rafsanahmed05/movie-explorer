function MovieCard({ movie, onDetails }) {
  return (
    <div className="movie-card">
      <img
        src={movie.image?.medium}
        alt={movie.name}
      />

      <div className="movie-card-content">
        <h2>{movie.name}</h2>

        <p>⭐ {movie.rating?.average || "N/A"}</p>

        <p>
          📅 {movie.premiered?.slice(0, 4) || "N/A"}
        </p>

        <button
          className="details-button"
          onClick={() => onDetails(movie)}
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default MovieCard;