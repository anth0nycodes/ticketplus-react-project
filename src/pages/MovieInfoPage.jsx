import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/AppContext";
import MovieInfoPageSkeleton from "../components/MovieInfoPageSkeleton";

const MovieInfoPage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movieId } = useParams();
  const { defaultMovieData, isLoading, setIsLoading } = useContext(AppContext);

  const fetchMovieInfo = async () => {
    setIsLoading(true);
    const { data } = await axios.get(
      `https://omdbapi.com/?apikey=df7652b5&i=${movieId}&plot=full`
    );
    console.log(data);
    setSelectedMovie(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  return (
    <>
      {isLoading ? (
        <MovieInfoPageSkeleton />
      ) : (
        <div className="movieinfopage">
          <Nav />

          <div className="container movieinfo__container">
            <div className="row movieinfo__row">
              <section className="movieinfo">
                <figure className="movieinfo__img--wrapper">
                  <img
                    src={selectedMovie?.Poster}
                    alt={`movie poster for: ${selectedMovie?.Title}`}
                    className="movieinfo__img"
                  />
                </figure>
                <div className="movieinfo__text">
                  <h1 className="movieinfo__text--title">
                    {selectedMovie?.Title}
                  </h1>
                  <div className="movieinfo__text--info">
                    {selectedMovie?.Released} | {selectedMovie?.Runtime} |{" "}
                    {selectedMovie?.Ratings[0].Value}
                  </div>
                  <h3 className="movieinfo__text--subtitle">Overview:</h3>
                  <p className="movieinfo__text--para">{selectedMovie?.Plot}</p>
                  <button className="movieinfo__text--btn no-cursor">
                    <FontAwesomeIcon icon={faPlay} />
                    <span>Watch</span>
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieInfoPage;
