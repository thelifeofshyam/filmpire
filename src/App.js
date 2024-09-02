import React, { useEffect, useState } from 'react'
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard.js';
const API_URL='http://omdbapi.com?apikey=fda909e2';

const App = () => {
  const [movies,setMovies]= useState([]);
  const [searchTerm, setSearchTerm]=useState('');

  const searchmovies= async (title) =>{
    const response= await fetch(`${API_URL}&s=${title}`);
    const data=await response.json();

    setMovies(data.Search);
  }
  useEffect(()=>{
    searchmovies('Spiderman');
  },[])
  
  return (
    <div className='app'>
      <h1>Filmpire</h1>
      <div className='search'>
        <input placeholder='search for movies' value={searchTerm} 
          onChange={(e)=>setSearchTerm(e.target.value)}/>
        <img
          src={SearchIcon}
          alt='search'
          onClick={()=>searchmovies(searchTerm)}
        />
      </div>
      {
        movies?.length>0?
          (
            <div className='container'>
                {movies.map((m)=>(
                  <MovieCard movie={m}/>
                ))}
            </div>
          ):
          (
              <h1>No Movies Found</h1>
          )
      }
      
    </div>
  );
}

export default App