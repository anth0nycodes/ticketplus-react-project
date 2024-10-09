import React, { useState } from "react";
import { AppContext } from "./context/AppContext";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);

  return (
    <>
      <AppContext.Provider value={{ currentPage, setCurrentPage }}>
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
