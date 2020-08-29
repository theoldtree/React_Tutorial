import React, {useState} from 'react';
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

function Club(props){
  return(
    <div>
      <h3> I engaged in {props.name}</h3>
      <h3> 동아리의 규모 : {props.amount}</h3>
    </div>
  );
}

const club_I_was_in = [
  {
    key: 0,
    name: "징검다리",
    amount: "중앙동아리",
  },
  {
    key: 1,
    name: "AFKN",
    amount: "중앙동아리",
  },
  {
    key: 2,
    name: "GROW",
    amount: "과동아리",
  }
];

function renderClub(club){
  console.log(club);
  return <Club name = {club.name} amount = {club.amount} key = {club.key}/>
}

function App() {

  const [state, setState] = useState(0);

  function minus(){
    console.log("minus");
    setState(state-1);
  }

  function add(){
    console.log("add");
    setState(state+1)
  }

  return (
  <div>
    <Family />
    <Food
      name = "pasta"
    />
    <Sports
      name = "badminton"
    />
    {club_I_was_in.map(club => <Club name = {club.name} amount = {club.amount} key = {club.key}/>)}
    {club_I_was_in.map(renderClub)}
    <div>
      <h2> You clicked {state} times </h2>
      <button onClick = {add}>Add</button>
      <button onClick = {minus}>Minus</button>
    </div>
  </div>);
}

export default App;
