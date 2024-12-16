export default function Navbar({ query, onSearchChange, onSearchSubmit }) {
  return (
    <nav className="navbar bg-dark bg-gradient">
      <div className="container-fluid">
        <a className="navbar-brand fs-1 text-danger">Boolflix</a>
        <form onSubmit={onSearchSubmit} className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={onSearchChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Cerca
          </button>
        </form>
      </div>
    </nav>
  );
}
