import React, { useContext } from "react";
import Movie from "./ui/Movie.jsx";
import SearchGraphic from "../assets/searchgraphic.svg";
import { AppContext } from "../context/AppContext.js";
import MovieSkeleton from "./ui/MovieSkeleton.jsx";

const MoviesPageMovies = () => {
  const { searchedMovies, isLoading } = useContext(AppContext);
  return (
    <section id="movies">
      <div className="movies__container">
        <div className="movies__row">
          <div className="movies__content">
            <div className="movies__list">
              {isLoading ? (
                new Array(6)
                  .fill(0)
                  .map((_, index) => <MovieSkeleton key={index} />)
              ) : searchedMovies.length > 0 ? (
                searchedMovies.map((movie) => (
                  <Movie key={movie.imdbID} movie={movie} />
                ))
              ) : (
                <figure className="moviespage__img--wrapper">
                  <img
                    src={SearchGraphic}
                    className="moviespage__img"
                    alt="cartoon graphic of person holding magnifying glass"
                  />
                  <h1 className="moviespage__img--title">
                    Waiting for your Search...
                  </h1>
                </figure>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesPageMovies;
