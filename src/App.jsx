
import './App.css'

import React, { useEffect, useRef, useState } from 'react'

function App() {
   const [time, settimer]=useState(0);

function starttimer(){ 
   
 }
function stoptimer(){  }
function resettimer(){  }
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

export default App
