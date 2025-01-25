import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Display = ({ movieList, handleDelete }) => {
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const handleOnDisplay = (mood) => {
    if (mood === "all") {
      return setDisplayList(movieList);
    }

    const filteredList = movieList.filter((movie) => movie.mood === mood);
    setDisplayList(filteredList);
  };

  return (
    <div className="container mt-3">
      <div className="bg-dark p-3">
        <div className="row text-white">
          <div className="col">
            <button
              className="btn btn-primary"
              onClick={() => handleOnDisplay("all")}
            >
              All
            </button>
            <button
              className="btn btn-warning"
              onClick={() => handleOnDisplay("drama")}
            >
              Drama
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleOnDisplay("action")}
            >
              Action
            </button>
          </div>
        </div>
        <div className="text-white mt-3">
          {" "}
          {displayList.length} movies Listed
        </div>

        {displayList.map((item, i) => (
          <div key={i} className="row mt-3">
            <MovieCard movieObj={item} handleOnDelete={handleDelete} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Display;
