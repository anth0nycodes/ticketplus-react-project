import React from "react";
import Movie from "./ui/Movie.jsx";

const HomePageMovies = ({defaultMovieData}) => {

  return (
    <section id="movies">
      <div className="movies__container">
        <div className="movies__row">
          <div className="movies__content">
            <div className="movies__list">
              {defaultMovieData.length > 0
                ? defaultMovieData.map((movie) => (
                    <Movie
                      key={movie.imdbID}
                      movie={movie}
                    />
                  ))
                : "Loading..."}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageMovies;
