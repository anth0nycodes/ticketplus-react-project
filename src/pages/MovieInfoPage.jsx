import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const MovieInfoPage = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movieId } = useParams();

  const fetchMovieInfo = async () => {
    const { data } = await axios.get(
      `https://omdbapi.com/?apikey=df7652b5&i=${movieId}&plot=full`
    );
    console.log(data);
    setSelectedMovie(data);
  };

  useEffect(() => {
    fetchMovieInfo();
  }, []);

  return (
    <>
      <div className="movieinfopage">
        <Nav />
        <div className="movieinfopage__content">
          <div className="movieinfo">
            <img
              src={selectedMovie?.Poster}
              alt={`movie poster for: ${selectedMovie?.Title}`}
              className="movieinfo__img"
            />
            <div className="movieinfo__text">
              <h1 className="movieinfo__text--title">{selectedMovie?.Title}</h1>
              <div className="movieinfo__text--info">
                {selectedMovie?.Released} | {selectedMovie?.Runtime} |{" "}
                {selectedMovie?.Ratings[0].Value}
              </div>
              <h3 className="movieinfo__text--subtitle">Overview:</h3>
              <p className="movieinfo__text--para">{selectedMovie?.Plot}</p>
              <button className="movieinfo__text--btn">
                <FontAwesomeIcon icon={faPlay} />
                <span>Watch</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfoPage;
