import { useState } from "react";
import "./App.css";
import Display from "./components/Display";
import Hero from "./components/Hero";

function App() {
  const [movieList, setMovieList] = useState([]);

  const addToList = (movie) => {
    setMovieList([...movieList, movie]);
  };

  const handleDelete = (imdbID) => {
    const deletedMovie = movieList.filter((movie) => movie.imdbID !== imdbID);
    setMovieList(deletedMovie);
  };
  return (
    <div className="wrapper">
      {/* Hero Component */}
      <Hero addToList={addToList} />

      {/* Display Component */}
      <Display movieList={movieList} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
