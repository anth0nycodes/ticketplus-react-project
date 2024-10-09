import React, { useContext, useState } from "react";
import MovieBackground from "../assets/moviebackground.jpg";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const HomePageLanding = () => {
  const { fetchMoviesBySearch, setCurrentPage } = useContext(AppContext);
  const [homeSearchBarValue, setHomeSearchBarValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      fetchMoviesBySearch(homeSearchBarValue);
      setCurrentPage("/movies");
      navigate("/movies");
    }
  };

  return (
    <section id="landing">
      <div className="movie__background--wrapper">
        <figure className="movie__background">
          <img
            src={MovieBackground}
            alt="Landing page image of movie posters"
            className="movie__background--img"
          />
          <div className="movie__background--text">
            <h1 className="movie__background--title">
              Ticket<span className="text-color">+</span>
            </h1>
            <p className="movie__background--para">
              With over 3000 movies on Ticket
              <span className="text-color">+</span>, the possibilities are
              endless!
            </p>
            <div className="movie__background--search">
              <div className="movie__input--wrapper">
                <input
                  type="text"
                  className="movie__input"
                  onChange={(event) =>
                    setHomeSearchBarValue(event.target.value)
                  }
                  placeholder="Find a movie"
                  onKeyUp={handleSubmit}
                />
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default HomePageLanding;
