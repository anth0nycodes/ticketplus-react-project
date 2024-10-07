import React, { useEffect, useState } from 'react'
import HomeLanding from './components/HomePageLanding'
import HomeMovies from './components/HomePageMovies'
import axios from 'axios'
import { AppContext } from './context/AppContext'

const App = () => {
  const [homeMovieData, setHomeMovieData] = useState([]);
  
  const fetchHomeMovies = async () => {
    const {data} = await axios.get("https://omdbapi.com/?apikey=df7652b5&s=minions");
    const homeMovies = data.Search.slice(0, 6);
    console.log(homeMovies)
    setHomeMovieData(homeMovies);
  }

  useEffect(() => {
    fetchHomeMovies();
  }, [])

  return (
   <>
  <AppContext.Provider value={{homeMovieData}}>
   <div className="content">
      <HomeLanding />
      <HomeMovies />
   </div>
  </AppContext.Provider>

   </>
  )
}

export default App