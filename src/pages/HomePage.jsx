import React, { useContext } from "react";
import HomePageMovies from "../components/HomePageMovies";
import HomePageLanding from "../components/HomePageLanding";
import Nav from "../components/Nav";
import { AppContext } from "../context/AppContext";

const HomePage = () => {
  const {currentPage, setCurrentPage} = useContext(AppContext);
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
