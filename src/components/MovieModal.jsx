function MovieModal({ movie, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <img
          src={movie.image?.original || movie.image?.medium}
          alt={movie.name}
        />

        <h2>{movie.name}</h2>

        <p>
          ⭐ Rating: {movie.rating?.average || "N/A"}
        </p>

        <p>
          📅 Release: {movie.premiered || "N/A"}
        </p>

        <p>
          🎭 Genre:{" "}
          {movie.genres?.length
            ? movie.genres.join(", ")
            : "N/A"}
        </p>

        <h3>Overview</h3>

        <div
          dangerouslySetInnerHTML={{
            __html:
              movie.summary || "No summary available.",
          }}
        />

        <button
          className="details-button"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default MovieModal;