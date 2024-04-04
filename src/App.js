import React from 'react';
import { movies , genres } from './data';
import MovieList from './components/MovieList';
import GenreFilter from './components/GenreFilter'


import './App.css';

function App() {
  return (
    <div className='containergit '>
      <h1>Top 15 Movies of All the Time</h1>
      
      <div className='genre-filter-container'>
      <h2>Filter By Genre</h2>
      <GenreFilter genres={genres}></GenreFilter>
      </div>

      <div className='MovieList'>
      <MovieList movies={movies}></MovieList>
      </div>

    </div>
  );
}

export default App;
