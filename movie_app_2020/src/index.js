import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MovieApp from './Movie_App';

const isMovie_App = false;

ReactDOM.render(
  <React.StrictMode>
    {isMovie_App? <App/> : <MovieApp/>}
  </React.StrictMode>,
  document.getElementById('root')
);
