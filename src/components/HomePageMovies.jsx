import React from "react";
import Movie from "./ui/Movie.jsx";
import MovieSkeleton from "./ui/MovieSkeleton.jsx";

const HomePageMovies = ({ defaultMovieData }) => {
  return (
    <section id="movies">
      <div className="movies__container">
        <div className="movies__row">
          <div className="movies__content">
            <div className="movies__list">
              {defaultMovieData.length > 0
                ? defaultMovieData.map((movie) => (
                    <Movie key={movie.imdbID} movie={movie} />
                  ))
                : new Array(6)
                    .fill(0)
                    .map((_, index) => <MovieSkeleton key={index} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageMovies;
