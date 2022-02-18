import React, { useState } from 'react';
import "./counter.css"

function getInitialState(){
  console.log('***********');
  return new Date().getDate()
}


const Counter = () => {
const [counter, setCounter] = useState(()=>getInitialState())


function increment(){
  setCounter((prevState) => prevState +1)

 
 
}
function decrement(){
  setCounter(counter -1)
}

    return (
        <div className='counter'>
       
          <button onClick={increment} className='btn btn-primary'>+</button><br/>
          <button onClick={decrement} className='btn btn-secondary'>-</button>
           <h1>You ordered {counter} :)</h1>
        </div>
    );
};

export default Counter;