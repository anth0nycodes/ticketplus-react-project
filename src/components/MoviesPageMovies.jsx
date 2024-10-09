import React, { useContext } from "react";
import Movie from "./ui/Movie.jsx";
import SearchGraphic from "../assets/searchgraphic.svg"
import { AppContext } from "../context/AppContext.js";

const MoviesPageMovies = () => {
  const { searchedMovies } = useContext(AppContext);
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
                : 
                <figure className="moviepage__img--wrapper">
                  <img src={SearchGraphic} className="moviepage__img" alt="cartoon graphic of person holding magnifying glass"/>
                  <h1 className="moviepage__img--title">Waiting for your Search...</h1>
                </figure>
                }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoviesPageMovies;
