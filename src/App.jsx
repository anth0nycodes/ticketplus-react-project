import React, { useEffect, useState } from "react";
import { AppContext } from "./context/AppContext.js";
import HomePage from "./pages/HomePage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage.jsx";
import axios from "axios";
import MovieInfoPage from "./pages/MovieInfoPage.jsx";

const App = () => {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesBySearch = async (searchQuery) => {
    if (!searchQuery) return;
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://omdbapi.com/?apikey=df7652b5&s=${searchQuery}`
      );
      const movies = data.Search.slice(0, 6);
      console.log(movies);
      setSearchedMovies(movies);

      setIsLoading(false);
    } catch (error) {
      console.error("An error has occurred in fetchMoviesByQuery: ", error);
    }
  };

  useEffect(() => {
    fetchMoviesBySearch();
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          currentPage,
          setCurrentPage,
          fetchMoviesBySearch,
          searchedMovies,
          setSearchedMovies,
          searchBarValue,
          setSearchBarValue,
          isLoading,
        }}
      >
        <Router>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/movies" element={<MoviesPage />}></Route>
              <Route path="/movies/:movieId" element={<MovieInfoPage />}></Route>
            </Routes>
          </div>
        </Router>
      </AppContext.Provider>
    </>
  );
};

export default App;
