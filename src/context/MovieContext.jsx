import React, { createContext, useState, useContext } from "react";

// Crea il contesto per i dati dei film e delle serie TV
const MovieContext = createContext();

// Componente provider che conterrà la logica per la ricerca dei film e delle serie TV
export const MovieProvider = ({ children }) => {
  const [query, setQuery] = useState(""); // Stato per la query di ricerca
  const [movies, setMovies] = useState([]); // Stato per i risultati dei film
  const [tvShows, setTvShows] = useState([]); // Stato per i risultati delle serie TV
  const [loading, setLoading] = useState(false); // Stato di caricamento

  // Funzione per cercare film e serie TV
  const searchMoviesAndTVShows = async (searchQuery) => {
    setLoading(true);
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const encodedQuery = encodeURIComponent(searchQuery);

    try {
      // Chiamata API per film
      const movieResponse = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodedQuery}`
      );
      const movieData = await movieResponse.json();

      // Chiamata API per serie TV
      const tvResponse = await fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${encodedQuery}`
      );
      const tvData = await tvResponse.json();

      // Unisco i risultati di film e serie TV
      setMovies(movieData.results || []);
      setTvShows(tvData.results || []);
    } catch (error) {
      console.error("Errore durante la chiamata API:", error);
      setMovies([]);
      setTvShows([]);
    } finally {
      setLoading(false);
    }
  };

  // Funzione per ottenere la URL della bandiera in base alla lingua
  const getFlagUrl = (language) => {
    const flagCode = language.toLowerCase();
    return `https://flagcdn.com/w20/${flagCode}.png`;
  };

  return (
    <MovieContext.Provider
      value={{
        query,
        setQuery,
        movies,
        tvShows,
        loading,
        searchMoviesAndTVShows,
        getFlagUrl,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

// Hook per accedere facilmente al contesto
export const useMovies = () => useContext(MovieContext);
