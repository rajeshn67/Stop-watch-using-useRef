import './App.css';
import React, { useEffect, useRef, useState } from 'react';
function App() {
   const [time, settimer]=useState(0);
let timerRef=useRef(null);
function starttimer(){ 
  timerRef.current=setInterval(() => {
     settimer( time=>time + 1);
 },1000)};
function stoptimer(){ 
 {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
 }
function resettimer(){ 
stoptimer();
settimer(0);
 }
return (
    <div>
      <h1>Stopwatch : {time} seconds</h1> 
      <button onClick={starttimer}>
         start
      </button>
      <br></br>
      <button onClick={stoptimer}>
        stop
      </button>
      <br></br>
      <button onClick={resettimer}>
         reset
      </button>
      
      
    </div>
  )
}
export default App;