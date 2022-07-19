import { useState } from "react"

export const TodoInput =({ getData })=>{
const[state,setState]=useState("")


const handleChange = (e)=>{
setState(e.target.value)

}
    return <div>
        <input onChange={handleChange} placeholder="write"/>
        <button onClick={() => getData(state)} >add</button>
    
    </div>
}