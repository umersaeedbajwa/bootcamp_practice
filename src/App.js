import React, { useState } from 'react';
import './App.css';
import {Message, Massege} from './massege.js';

function App() {

  let [count, setcount] = useState(1);
  let [isMorning, setMorning] = useState(true);
  return (
    <div className={`box ${isMorning ? 'dayLight' : 'night'}`}>

      <h1> Day Time = {isMorning ? 'Morning' : 'Night'}  </h1>
      <Massege counter = {count} />
      
      <br />
      <button onClick={()=> setcount(++count)}>
        Update counter</button>
      <br />
      <button onClick={()=>setcount((--count))}>
        Decrease Counter </button>
        
      <button onClick={()=> setMorning(!isMorning)}>Update Day</button>
      

      
    </div>
  );
}

export default App;
