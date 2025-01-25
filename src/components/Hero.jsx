import React, { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchedData } from "./axios";
import { randomChar } from "./RandomChar";

const Hero = ({ addToList }) => {
  const [movieObj, setMovieObj] = useState({});

  const [bgImage, setBgImage] = useState("");

  const backgroundPic = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  useEffect(() => {
    fetchedMovie(randomChar());
  }, []);

  const fetchedMovie = async (str) => {
    const movie = await fetchedData(str);

    setMovieObj(movie);
    setBgImage(movie.Poster);
  };

  const searchREf = useRef("");

  const handleOnSearch = () => {
    const str = searchREf.current.value;
    fetchedMovie(str);
  };

  const handleOnDelete = () => {
    setMovieObj({});
  };

  const addMovieList = (mood) => {
    addToList({ ...movieObj, mood });
    setMovieObj({});
  };
  return (
    <div>
      <nav className="py-3 text-warning fixed-top">
        <h1 className="container">
          <b>Movie World</b>
        </h1>
      </nav>

      <div
        className="hero d-flex justify-content-center align-items-center"
        style={backgroundPic}
      >
        <div className="hero-content">
          <div className="text-center content text-white ">
            <h2>Search Millios of Movies</h2>
            <p>Find about the movies more...</p>
          </div>

          <div className="input-group mt-5">
            <input
              ref={searchREf}
              type="text"
              className="form-control"
              placeholder="Search for Movies"
              aria-label="Search for Movies"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-danger"
              type="button"
              id="button-addon2"
              onClick={handleOnSearch}
            >
              Search
            </button>
          </div>

          <div className="movie-card-display">
            {Object.keys(movieObj).length > 0 ? (
              <MovieCard
                movieObj={movieObj}
                handleOnDelete={handleOnDelete}
                addMovieList={addMovieList}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
