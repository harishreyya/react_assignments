
import { useState } from 'react';

export const Counter =()=>{
    const[state,setState]=useState(0)
    // const increment = ()=>{
    //   setState(state + 1)
    // }
    
    if(state==25)
    return <div>reached maximum</div>
      return (
        // <div >
         
        //   <h1>{state}</h1>
        //   <button onClick={()=>setState(state+1)}>button +</button>
        //   <button onClick={()=>setState(state-1)}>button -</button>
        //   <button onClick={()=>setState(0)}>reset</button>
    
         
        // </div>
        <span>hi</span>
      );
}