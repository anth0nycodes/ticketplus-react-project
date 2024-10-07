import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <figure className="movie__img--wrapper">
        <img
          src={movie.Poster}
          alt={`movie poster for: ${movie.Title}`}
          className="movie__img"
        />
        <h3 className="movie__info--title">{movie.Title}</h3>
        <a href="#">
          <button className="movie__info--btn">Find Out More</button>
        </a>
      </figure>
    </div>
  );
};

export default Movie;
