import React from "react";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w342";

export default function MovieCard({ movie, isTvShow = false, getFlagUrl }) {
  // Calcolo il numero di stelle piene in base al voto
  const voteStars = parseInt(movie.vote_average / 2);
  const maxStars = 5;

  // Creo un array per le stelle
  const stars = Array.from({ length: maxStars }, (_, index) => {
    if (index < voteStars) {
      return <i className="fas fa-star" key={index}></i>;
    } else {
      return <i className="far fa-star" key={index}></i>;
    }
  });

  return (
    <div className="col-md-2 mb-4 movie-card">
      <div className="card bg-dark text-white position-relative">
        <img
          src={IMAGE_BASE_URL + movie.poster_path}
          className="card-img"
          alt={isTvShow ? movie.name : movie.title}
        />

        <div className="movie-card-overlay">
          <h5 className="card-title">{isTvShow ? movie.name : movie.title}</h5>
          <p className="card-text">
            {movie.overview || "Nessuna descrizione disponibile."}
          </p>
          <p className="d-flex justify-content-center align-items-center">
            {stars}
          </p>
          <p>
            Lingua: {movie.original_language}
            {movie.original_language && (
              <img
                src={getFlagUrl(movie.original_language)}
                alt="flag"
                style={{
                  width: "20px",
                  height: "15px",
                  marginLeft: "8px",
                }}
              />
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
