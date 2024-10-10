import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext.js";

const MoviesSearchBar = () => {
  const { fetchMoviesBySearch, searchBarValue, setSearchBarValue } =
    useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      fetchMoviesBySearch(searchBarValue);
    } else {
      fetchMoviesBySearch(searchBarValue);
    }
  };

  return (
    <form className="moviespage__search" onSubmit={handleSubmit}>
      <div className="moviespage__input--wrapper">
        <input
          type="text"
          className="moviespage__input"
          placeholder="Search for a movie"
          value={searchBarValue}
          onChange={(event) => setSearchBarValue(event.target.value)}
        />
      </div>
      <div className="moviespage__btn--wrapper">
        <button type="submit" className="moviespage__btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

export default MoviesSearchBar;
