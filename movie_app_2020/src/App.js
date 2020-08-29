import React from 'react';
import Family from './family';

function Food({name}){
  console.log({name});
  return(
    <h2> I like {name} </h2>
  );
}

function Sports(props){
  return(
  <h2> I like {props.name}</h2>
  );
}

function App() {
  return (
  <div>
    <h1> Hello!!! ^오^ </h1>
    <Family />
    <Food
      name = "pasta"
    />
    <Food
      name = "steak"
    />
    <Food
      name = "grape"
    />
    <Sports
      name = "badminton"
    />
  </div>);
}

export default App;
