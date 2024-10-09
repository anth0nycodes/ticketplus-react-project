import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MoviesSearchBar = () => {
  const { fetchMoviesBySearch, searchBarValue, setSearchBarValue } =
    useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      fetchMoviesBySearch(searchBarValue);
    }
    else {
      fetchMoviesBySearch(searchBarValue);
    }
  };

  return (
    <form className="moviepage__search" onSubmit={handleSubmit}>
      <div className="moviepage__input--wrapper">
        <input
          type="text"
          className="moviepage__input"
          placeholder="Search for a movie"
          value={searchBarValue}
          onChange={(event) => setSearchBarValue(event.target.value)}
        />
      </div>
      <div className="moviepage__btn--wrapper">
        <button type="submit" className="moviepage__btn">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

export default MoviesSearchBar;
