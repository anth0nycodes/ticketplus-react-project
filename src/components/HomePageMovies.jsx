import React, { useContext } from "react";
import Movie from "./ui/Movie.jsx";
import { AppContext } from "../context/AppContext";

const HomePageMovies = () => {
  const { homeMovieData } = useContext(AppContext);
  return (
    <section id="movies">
      <div className="movies__container">
        <div className="movies__row">
          <div className="movies__content">
            <div className="movies__list">
              {homeMovieData.length > 0
                ? homeMovieData.map((movie) => (
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
