import React, { useContext } from 'react'
import HomePageMovies from "../components/HomePageMovies";
import { AppContext } from '../context/AppContext';
import Nav from '../components/Nav';

const MoviesPage = () => {
  const {currentPage, setCurrentPage} = useContext(AppContext);
  return (
   <>
    <div className="moviepage">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <div className="moviepage__content">
        <HomePageMovies />
      </div>
      </div>
   </>
  )
}

export default MoviesPage