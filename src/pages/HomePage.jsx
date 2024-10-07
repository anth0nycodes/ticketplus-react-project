import React from "react";
import HomePageMovies from "../components/HomePageMovies";
import HomePageLanding from "../components/HomePageLanding";

const HomePage = () => {
  return (
    <>
      <div className="homepage">
        <HomePageLanding />
        <HomePageMovies />
      </div>
    </>
  );
};

export default HomePage;
