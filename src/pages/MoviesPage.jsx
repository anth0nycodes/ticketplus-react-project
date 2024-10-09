import React, { useContext } from "react";
import { AppContext } from "../context/AppContext.js";
import Nav from "../components/Nav.jsx";
import MoviesSearchBar from "../components/MoviesSearchBar.jsx";
import MoviesPageMovies from "../components/MoviesPageMovies.jsx";

const MoviesPage = () => {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  return (
    <>
      <div className="moviepage">
        <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="moviepage__content">
          <MoviesSearchBar />
          <MoviesPageMovies />
        </div>
      </div>
    </>
  );
};

export default MoviesPage;
