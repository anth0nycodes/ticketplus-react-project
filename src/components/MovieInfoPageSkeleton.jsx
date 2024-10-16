import React from "react";
import Nav from "./Nav";
import MovieSkeleton from "./ui/MovieSkeleton";

const MovieInfoPageSkeleton = () => {
  return (
    <div className="movieinfopage">
      <Nav />
      <div className="container movieinfo__container">
        <div className="row movieinfo__row">
          <section className="movieinfo">
            <figure className="movieinfo__img--wrapper">
              <div className="movieinfo__img movieinfo__img--skeleton skeleton"></div>
            </figure>
            <div className="movieinfo__text">
              <div className="movieinfo__title--skeleton skeleton"></div>
              <div className="movieinfo__text--info">
                <div className="movieinfo__info--skeleton skeleton"></div>
                <span className="movieinfo__info--separator">|</span>
                <div className="movieinfo__info--skeleton skeleton"></div>
                <span className="movieinfo__info--separator">|</span>
                <div className="movieinfo__info--skeleton skeleton"></div>
              </div>
              <h3 className="movieinfo__text--subtitle">Overview:</h3>
              <div className="movieinfo__paras--skeleton">
                <div className="movieinfo__para--skeleton skeleton"></div>
                <div className="movieinfo__para--skeleton skeleton"></div>
                <div className="movieinfo__para--skeleton skeleton"></div>
                <div className="movieinfo__para--skeleton skeleton"></div>
                <div className="movieinfo__para--skeleton skeleton"></div>
              </div>
              <div className="movieinfo__btn--skeleton skeleton"></div>
            </div>
          </section>
          <section className="recommended__movies">
            <div className="movies__container">
              <div className="movies__row">
                <h2 className="recommended__movies--title">
                  Recommended Movies
                </h2>
                <div className="movies__content">
                  <h2 className="movies__title movies__title--skeleton skeleton"></h2>
                  <div className="recommended__movies--list movies__list">
                    {new Array(6).fill(0).map((_, index) => (
                      <MovieSkeleton key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoPageSkeleton;
