import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/AppContext";
import MovieInfoPageSkeleton from "../components/MovieInfoPageSkeleton";
import Movie from "../components/ui/Movie";

const MovieInfoPage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movieId } = useParams();
  const { defaultMovieData } = useContext(AppContext);
  const [isMovieInfoLoading, setIsMovieInfoLoading] = useState(true);

  const fetchMovieInfo = async () => {
    try {
      const { data } = await axios.get(
        `https://omdbapi.com/?apikey=df7652b5&i=${movieId}&plot=full`
      );
      console.log(data);
      setSelectedMovie(data);
      setIsMovieInfoLoading(false);
    } catch (error) {
      console.error("An error occurred in fetchMovieInfo: ", error);
    }
  };

  useEffect(() => {
    setIsMovieInfoLoading(true);
    fetchMovieInfo();
    window.scrollTo(0, 0);
  }, [movieId]);

  return (
    <>
      {isMovieInfoLoading ? (
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
                    {selectedMovie?.Ratings[0]?.Value}
                  </div>
                  <h3 className="movieinfo__text--subtitle">Overview:</h3>
                  <p className="movieinfo__text--para">{selectedMovie?.Plot}</p>
                  <button className="movieinfo__text--btn no-cursor">
                    <FontAwesomeIcon icon={faPlay} />
                    <span>Watch</span>
                  </button>
                </div>
              </section>
              <section className="recommended__movies">
                <div className="movies__container">
                  <div className="movies__row">
                    <h2 className="recommended__movies--title">
                      Recommended Movies
                    </h2>
                    <div className="movies__content">
                      <div className="recommended__movies--list movies__list">
                        {defaultMovieData.slice(0, 6).map((movie) => (
                          <Movie key={movie.imdbID} movie={movie} />
                        ))}
                      </div>
                    </div>
                  </div>
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
