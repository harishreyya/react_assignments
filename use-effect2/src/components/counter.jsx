import { useState } from "react";
import React from 'react'

export const Counter =()=>{

const [counter,setCounter] = useState(0)

const incrementvalue = ()=>{
    
    setCounter(counter + 1)
}

   
    return (<div>

    <h1>{counter}</h1>
    <h1>{counter*2}</h1>
    <button onClick={incrementvalue}>counter</button>
    
    </div>


    )


}
