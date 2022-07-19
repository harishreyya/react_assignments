import { useState } from "react"



export const PracTodoInput = ({getItems}) =>{
const [text,setText] = useState("")

const handleClick = ()=>{
    getItems(text)
}



    return <div>
<input onChange={(e)=>setText(e.target.value)} placeholder="write"/>
<button onClick={handleClick}>bokkka</button>
    </div>
}