import { useMovies } from "../context/MovieContext";

export default function MovieList() {
  const { movies, tvShows, loading, getFlagUrl } = useMovies();

  return (
    <div className="container mt-3">
      {loading && <p>Caricamento...</p>}

      {/* Film */}
      {Array.isArray(movies) && movies.length > 0 && (
        <>
          <h3>Film</h3>
          <ul className="list-group mt-3">
            {movies.map((movie) => (
              <li className="list-group-item" key={movie.id}>
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
                <span>Voto: {movie.vote_average}</span>
              </li>
            ))}
          </ul>
        </>
      )}

      {/* Serie TV */}
      {Array.isArray(tvShows) && tvShows.length > 0 && (
        <>
          <h3>Serie TV</h3>
          <ul className="list-group mt-3">
            {tvShows.map((tvShow) => (
              <li className="list-group-item" key={tvShow.id}>
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
                <span>Voto: {tvShow.vote_average}</span>
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
