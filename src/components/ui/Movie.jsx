import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const Movie = ({ movie }) => {
  const { setCurrentPage } = useContext(AppContext);
  return (
    <div className="movie">
      <figure className="movie__img--wrapper">
        <img
          src={movie.Poster}
          alt={`movie poster for: ${movie.Title}`}
          className="movie__img"
        />
        <h3 className="movie__info--title">{movie.Title}</h3>
        <Link
          to={`/movies/${movie.imdbID}`}
          onClick={() => setCurrentPage(null)}
        >
          <button className="movie__info--btn">Find Out More</button>
        </Link>
      </figure>
    </div>
  );
};

export default Movie;
