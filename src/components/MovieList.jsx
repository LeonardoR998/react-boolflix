import { useMovies } from "../context/MovieContext";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

// Funzione per generare le stelle
const renderStars = (vote) => {
  const fullStars = getFullStars(vote);
  const emptyStars = 5 - fullStars;

  return (
    <>
      {/* Stelle piene */}
      {Array.from({ length: fullStars }, (_, i) => (
        <i key={`full-${i}`} className="fas fa-star text-warning"></i>
      ))}
      {/* Stelle vuote */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <i key={`empty-${i}`} className="far fa-star text-warning"></i>
      ))}
    </>
  );
};

// Funzione alternativa senza Math.ceil
const getFullStars = (vote) => {
  const stars = vote / 2 + 0.99;
  return parseInt(stars);
};

export default function MovieList() {
  const { movies, tvShows, loading, getFlagUrl } = useMovies();

  return (
    <div className="container mt-3">
      {loading && <p>Caricamento...</p>}

      {/* Film */}
      {Array.isArray(movies) && movies.length > 0 && (
        <>
          <h3 className="fs-1 text-uppercase mt-5">Film</h3>
          <ul className="list-group mt-3">
            {movies.map((movie) => (
              <li
                className="list-group-item d-flex align-items-start"
                key={movie.id}
              >
                {movie.poster_path && (
                  <img
                    src={`${IMAGE_BASE_URL}w342${movie.poster_path}`}
                    alt={movie.title}
                    className="me-3"
                    width="100"
                  />
                )}
                <div>
                  <strong>{movie.title}</strong> ({movie.original_title})<br />
                  <span>Lingua: {movie.original_language}</span>
                  {movie.original_language && (
                    <img
                      src={getFlagUrl(movie.original_language)}
                      alt="flag"
                      width="20"
                      height="15"
                      style={{ marginLeft: "10px" }}
                    />
                  )}
                  <br />
                  <span>Voto: </span>
                  {renderStars(movie.vote_average)}
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Serie TV */}
      {Array.isArray(tvShows) && tvShows.length > 0 && (
        <>
          <h3 className="fs-1 text-uppercase mt-5">Serie TV</h3>
          <ul className="list-group mt-3">
            {tvShows.map((tvShow) => (
              <li
                className="list-group-item d-flex align-items-start"
                key={tvShow.id}
              >
                {tvShow.poster_path && (
                  <img
                    src={`${IMAGE_BASE_URL}w342${tvShow.poster_path}`}
                    alt={tvShow.name}
                    className="me-3"
                    width="100"
                  />
                )}
                <div>
                  <strong>{tvShow.name}</strong> ({tvShow.original_name})<br />
                  <span>Lingua: {tvShow.original_language}</span>
                  {tvShow.original_language && (
                    <img
                      src={getFlagUrl(tvShow.original_language)}
                      alt="flag"
                      width="20"
                      height="15"
                      style={{ marginLeft: "10px" }}
                    />
                  )}
                  <br />
                  <span>Voto: </span>
                  {renderStars(tvShow.vote_average)}
                </div>
              </li>
            ))}
          </ul>
        </>
      )}

      {Array.isArray(movies) &&
        movies.length === 0 &&
        Array.isArray(tvShows) &&
        tvShows.length === 0 &&
        !loading && <p>Nessun risultato trovato.</p>}
    </div>
  );
}
