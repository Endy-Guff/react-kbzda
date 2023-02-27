import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Rating />
    </div>
  );
}

function Rating(){
  return(
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  )
}

function Star(){
  return(
    <div>Star</div>
  )
}
export default App;
