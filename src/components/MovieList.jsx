import { useMovies } from "../context/MovieContext";
import MovieCard from "./MovieCard";

export default function MovieList() {
  const { movies, tvShows, loading, getFlagUrl } = useMovies();

  return (
    <div className="container mt-4">
      {loading && <p>Caricamento...</p>}

      {/* Film */}
      {movies.length > 0 && (
        <>
          <h3 className="fs-1 text-uppercase mb-3">Film</h3>
          <div className="row">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} getFlagUrl={getFlagUrl} />
            ))}
          </div>
        </>
      )}

      {/* Serie TV */}
      {tvShows.length > 0 && (
        <>
          <h3 className="fs-1 text-uppercase mt-5 mb-3">Serie TV</h3>
          <div className="row">
            {tvShows.map((tvShow) => (
              <MovieCard
                key={tvShow.id}
                movie={tvShow}
                isTvShow
                getFlagUrl={getFlagUrl}
              />
            ))}
          </div>
        </>
      )}

      {movies.length === 0 && tvShows.length === 0 && !loading && (
        <p className="text-center">Nessun risultato trovato.</p>
      )}
    </div>
  );
}
