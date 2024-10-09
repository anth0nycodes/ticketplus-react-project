import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Nav from '../components/Nav';
import MoviesSearchBar from '../components/MoviesSearchBar';
import MoviesPageMovies from '../components/MoviesPageMovies';

const MoviesPage = () => {
  const {currentPage, setCurrentPage } = useContext(AppContext);

  return (
   <>
    <div className="moviepage">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <div className="moviepage__content">
        <MoviesSearchBar />
        <MoviesPageMovies />
      </div>
      </div>
   </>
  )
}

export default MoviesPage