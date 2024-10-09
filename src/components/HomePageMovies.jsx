import React, { useContext } from "react";
import Movie from "./ui/Movie.jsx";
import { AppContext } from "../context/AppContext";

const HomePageMovies = () => {
  const { defaultMovieData } = useContext(AppContext);
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
