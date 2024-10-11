import React, { useContext } from "react";
import HomePageMovies from "../components/HomePageMovies.jsx";
import HomePageLanding from "../components/HomePageLanding.jsx";
import Nav from "../components/Nav.jsx";
import { AppContext } from "../context/AppContext.js";

const HomePage = () => {
  const { currentPage, setCurrentPage } = useContext(AppContext);

  return (
    <>
      <div className="homepage">
        <Nav setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <div className="homepage__content">
          <HomePageLanding />
          <HomePageMovies />
        </div>
      </div>
    </>
  );
};

export default HomePage;
