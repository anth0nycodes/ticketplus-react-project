import React, { useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "./context/AppContext";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const [defaultMovieData, setDefaultMovieData] = useState([]);

  const fetchDefaultMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://omdbapi.com/?apikey=df7652b5&s=minions"
      );
      const homeMovies = data.Search.slice(0, 6);
      console.log(homeMovies);
      setDefaultMovieData(homeMovies);
    }
    catch(error) {
      console.error("An error has occurred in fetchHomeMovies: ", error);
    }
  };

  useEffect(() => {
    fetchDefaultMovies();
  }, []);

  return (
    <>
      <AppContext.Provider value={{ defaultMovieData, currentPage, setCurrentPage }}>
        <Router>
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/movies" element={<MoviesPage />}></Route>
            </Routes>
          </div>
        </Router>
      </AppContext.Provider>
    </>
  );
};

export default App;
