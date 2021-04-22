
import React, { Component } from 'react';
import Slider from './Components/Slider'
import Footer from './Components/Footer';
import './App.css';
import PostList from './Components/PostList';
import { movies } from './Components/movies';
import SearchBar from './Components/SearchBar';

fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/tt1375666", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "30fbbc1001msh55aaa9e1828ec94p1be749jsn195c14fe5c37",
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});

class App extends Component {

  render() {
    return (
        
          <div className="App">
            <div class="logo">
              <h1>MOVIES</h1>
            </div>
          <SearchBar/>
{/* 
          <PostList/> */}

          <div> 
          <div class="movies">Genre 1</div>
            <Slider name="Genre1">
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
        </div>
        <div >
        <div class="movies">Genre 2</div>
        <Slider name="Genre2">
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
        </div>

        <div>
        <div class="movies">Genre 3</div>
        <Slider name="Genre3">
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
        </div>
            <Footer />
          </div>
  
    );
  }
}

export default App;
