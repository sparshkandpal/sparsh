import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MoviesList from './MoviesList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [moviesListDefault, setMoviesListDefault] = useState();
  const [moviesList, setMoviesList] = useState();

  const fetchData = async () => {
    return await fetch('https://api.themoviedb.org/3/movie/popular?api_key=08e923c39c49a0c48856dca5ab574331&language=en-US&page=1')
      .then(response => response.json())
      .then(data => {
         setMoviesList(data.results) 
         setMoviesListDefault(data.results)
       });
      }

  const updateInput = async (input) => {
     const filtered = moviesListDefault.filter(movies => {
      return movies.original_title.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setMoviesList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <h1>Search</h1>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <MoviesList moviesList={moviesList}/>
    </>
   );
}

export default SearchPage