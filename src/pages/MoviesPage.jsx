import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import Nav from '../components/Nav';
import MoviesSearchBar from '../components/MoviesSearchBar';
import axios from 'axios';
import MoviesPageMovies from '../components/MoviesPageMovies';

const MoviesPage = () => {
  const {currentPage, setCurrentPage} = useContext(AppContext);
  const [searchedMovies, setSearchedMovies] = useState([]);

  const fetchMoviesBySearch = async (searchQuery) => {
    if (!searchQuery) return;

    try {
      const { data } = await axios.get(
        `https://omdbapi.com/?apikey=df7652b5&s=${searchQuery}`
      );
      const movies = data.Search.slice(0, 6);
      console.log(movies);
      setSearchedMovies(movies);
    } catch (error) {
      console.error("An error has occurred in fetchMoviesByQuery: ", error);
    }
  };

  return (
   <>
    <div className="moviepage">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <div className="moviepage__content">
        <MoviesSearchBar fetchMoviesBySearch={fetchMoviesBySearch}/>
        <MoviesPageMovies searchedMovies={searchedMovies}/>
      </div>
      </div>
   </>
  )
}

export default MoviesPage