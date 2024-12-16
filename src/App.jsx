import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [query, setQuery] = useState(""); // Stato per la query di ricerca

  // Funzione per gestire l'input di ricerca
  const handleSearchChange = (e) => {
    setQuery(e.target.value); // Aggiorna lo stato quando l'utente digita nella barra di ricerca
  };

  // Funzione per gestire l'invio del form
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Hai cercato:", query);
  };

  return (
    <div className="App">
      <Navbar
        query={query}
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />

      <div className="container mt-3">
        {query && (
          <p>
            Hai cercato: <strong>{query}</strong>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
