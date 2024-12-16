import React, { createContext, useState, useContext } from "react";

// Crea il contesto per i dati dei film
const MovieContext = createContext();

// Componente provider che conterrà la logica per la ricerca dei film
export const MovieProvider = ({ children }) => {
  const [query, setQuery] = useState(""); // Stato per la query di ricerca
  const [movies, setMovies] = useState([]); // Stato per i risultati dei film
  const [loading, setLoading] = useState(false); // Stato di caricamento

  // Funzione per cercare i film
  const searchMovies = async (searchQuery) => {
    setLoading(true);
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const encodedQuery = encodeURIComponent(searchQuery);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodedQuery}`
      );

      if (!response.ok) {
        throw new Error("Errore nella risposta dell'API");
      }

      const data = await response.json();

      // Verifico se ci sono risultati e aggiorna lo stato
      setMovies(data.results || []);
    } catch (error) {
      console.error("Errore durante la chiamata API:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MovieContext.Provider
      value={{
        query,
        setQuery,
        movies,
        loading,
        searchMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// Hook per accedere facilmente al contesto
export const useMovies = () => useContext(MovieContext);
