import { useMovies } from "../context/MovieContext";

export default function MovieList() {
  const { movies, loading } = useMovies();

  return (
    <div className="container mt-3">
      {loading && <p>Caricamento...</p>}

      {Array.isArray(movies) && movies.length > 0 && (
        <ul className="list-group mt-3">
          {movies.map((movie) => (
            <li className="list-group-item" key={movie.id}>
              <strong>{movie.title}</strong> ({movie.original_title})<br />
              <span>Lingua: {movie.original_language}</span>
              <br />
              <span>Voto: {movie.vote_average}</span>
            </li>
          ))}
        </ul>
      )}

      {Array.isArray(movies) && movies.length === 0 && !loading && (
        <p>Nessun risultato trovato.</p>
      )}
    </div>
  );
}
