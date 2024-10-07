import React, { useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "./context/AppContext";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const [homeMovieData, setHomeMovieData] = useState([]);

  const fetchHomeMovies = async () => {
    const { data } = await axios.get(
      "https://omdbapi.com/?apikey=df7652b5&s=minions"
    );
    const homeMovies = data.Search.slice(0, 6);
    console.log(homeMovies);
    setHomeMovieData(homeMovies);
  };

  useEffect(() => {
    fetchHomeMovies();
  }, []);

  return (

    <>
      <AppContext.Provider value={{ homeMovieData }}>
        <Router>
          <div className="App">
            <Nav setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            <div className="content">
              <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/movies" element={<MoviesPage />}></Route>
              </Routes>
            </div>
          </div>
        </Router>
      </AppContext.Provider>
    </>
  );
};

export default App;
