import React, { useContext, useState, useEffect } from "react";
import HomePageMovies from "../components/HomePageMovies.jsx";
import HomePageLanding from "../components/HomePageLanding.jsx";
import Nav from "../components/Nav.jsx";
import { AppContext } from "../context/AppContext.js";
import axios from "axios";

const HomePage = () => {
  const { currentPage, setCurrentPage } = useContext(AppContext);
  const [defaultMovieData, setDefaultMovieData] = useState([]);

  const fetchDefaultMovies = async () => {
    try {
      const { data } = await axios.get(
        "https://omdbapi.com/?apikey=df7652b5&s=minions"
      );
      const homeMovies = data.Search.slice(0, 6);
      console.log(homeMovies);
      setDefaultMovieData(homeMovies);
    } catch (error) {
      console.error("An error has occurred in fetchHomeMovies: ", error);
    }
  };

  useEffect(() => {
    fetchDefaultMovies();
  }, []);

  return (
    <>
      <div className="homepage">
        <Nav setCurrentPage={setCurrentPage} currentPage={currentPage} />
        <div className="homepage__content">
          <HomePageLanding />
          <HomePageMovies defaultMovieData={defaultMovieData} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
