import "bootstrap/dist/css/bootstrap.min.css";
import { MovieProvider } from "./context/MovieContext";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <MovieProvider>
      <Navbar />
      <MovieList />
    </MovieProvider>
  );
}

export default App;
