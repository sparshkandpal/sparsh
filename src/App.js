
import React, { Component } from 'react';
import Slider from './Components/Slider'
import Footer from './Components/Footer';
import './App.css';
import PostList from './Components/PostList';
import { movies } from './Components/movies';
import SearchBar from './Components/SearchBar';


class App extends Component {

  render() {
    return (
        
          <div className="App">
            <div className="logo">
              <h1>MOVIES</h1>
            </div>
          <SearchBar/>

          <PostList/>

          <div> 
          <div className="movies">Genre 1</div>
            <Slider name="Genre1">
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
        </div>
        <div >
        <div className="movies">Genre 2</div>
        <Slider name="Genre2">
          {movies.map(movie => (
            <Slider.Item movie={movie} key={movie.id}>item1</Slider.Item>
          ))}
        </Slider>
        </div>

        <div>
        <div className="movies">Genre 3</div>
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
