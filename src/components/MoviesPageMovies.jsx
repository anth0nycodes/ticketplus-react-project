import React from "react";
import Movie from "./ui/Movie.jsx";

const MoviesPageMovies = ({ searchedMovies }) => {
  return (
    <section id="movies">
      <div className="movies__container">
        <div className="movies__row">
          <div className="movies__content">
            <div className="movies__list">
              {searchedMovies.length > 0
                ? searchedMovies.map((movie) => (
                    <Movie key={movie.imdbID} movie={movie} />
                  ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesPageMovies;
