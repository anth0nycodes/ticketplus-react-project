import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const MoviesSearchBar = ({ fetchMoviesBySearch }) => {
  const [searchBarValue, setSearchBarValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchMoviesBySearch(searchBarValue);
  };

  return (
    <form className="moviepage__search" onSubmit={handleSubmit}>
      <div className="moviepage__search--input">
        <input
          type="text"
          placeholder="Search for a movie"
          value={searchBarValue}
          onChange={(event) => setSearchBarValue(event.target.value)}
        />
      </div>
      <div className="moviepage__search--btn">
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

export default MoviesSearchBar;
