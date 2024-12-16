import { useMovies } from "../context/MovieContext";

export default function Navbar() {
  const { query, setQuery, searchMoviesAndTVShows } = useMovies();

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    searchMoviesAndTVShows(query);
  };

  return (
    <nav className="navbar bg-dark bg-gradient">
      <div className="container-fluid">
        <a className="navbar-brand fs-1 text-danger">Boolflix</a>
        <form onSubmit={handleSearchSubmit} className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={handleSearchChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Cerca
          </button>
        </form>
      </div>
    </nav>
  );
}
