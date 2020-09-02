import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Movie from './Movie';

export default function MovieApp(){

  const [state,setState] = useState({ isLoading : true, movies : [] });
  const { isLoading, movies } = state;
  
  async function getMovies(){
    const {
      data : {
        data : {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    setState({movies, isLoading : false});
  }

  useEffect(() => {
    getMovies();
  })

  return(
    <section className = "container">
      {isLoading ? (
        <div className = "loader">
          <span className = "loader_text">
            Loading...
          </span>
        </div>
        ) : (
        <div className = "movies">
          {
            movies.map(movie => 
              <Movie
                genres = {movie.genres}
                key = {movie.id} 
                id = {movie.id} 
                year = {movie.year} 
                title = {movie.title} 
                summary = {movie.summary} 
                poster = {movie.medium_cover_image}/>
            )
          }
        </div>
      )}
    </section>
  );
}