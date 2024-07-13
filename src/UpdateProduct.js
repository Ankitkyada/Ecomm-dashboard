
 
import { useState } from 'react';

let adjustInterval = undefined;

 function UpdateProduct()
 {
    const [watch,setWatch] = useState(0);
    const [started,setStarted] = useState(false);

   const startWatch= ()=>{
    adjustInterval = setInterval(()=>{
        setWatch((watch)=>watch+1)
      setStarted(true)
    },1000)
   }

   const stopWatch = ()=>{
    clearInterval(adjustInterval)
    setStarted(false)
   }
   
   const resetWatch=()=>{
        setWatch(0)
   }
    return(
        <div>
            <h1>UpdateProduct Page</h1>
            <h2>Stop Watch</h2>
             <h3>{watch}</h3>
            <button disabled={started} onClick={startWatch}>Start</button>
            <button onClick={stopWatch}>Stop</button>
            <button onClick={resetWatch}>Reset</button>
    
        </div>
    )
 }
 export default UpdateProduct;