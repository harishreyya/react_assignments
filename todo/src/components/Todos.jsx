import { useEffect, useState } from "react"


export const Todos =()=>{

    const [todos,setTodos] = useState([]);
    const [text,setText] = useState("");
   
    const [page,setPage] = useState(1)
  useEffect(()=>{
      getData()
    },[page])

    const getData = () =>{
       
        fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`).then(d=>d.json()).then(res=>{
            setTodos(res)
        
        })
    }

    
    return  (
    <div>
        <input 
        placeholder="enter todos" 
        onChange={(e) => setText(e.target.value)}
        />
       
        <button onClick={() => {
            const data = {status : false ,title: text}
            fetch("http://localhost:3001/todos",{
                method:"POST",
                body: JSON.stringify(data),
                headers:{
                    "content-type":"application/json"
                },
            }).then(getData)
            //   setTodos([...todos,{status : false ,title: text}])
        }} > Add todos </button> 
       
        {todos.map(e => <div key={e.id}>{e.title} - {e.status ? "done"  : "not done" }
 </div>
       )} 

        <button onClick={()=>{
            setPage(page - 1)
        }}
        >prev</button>
        <button onClick={()=>{
            setPage(page + 1)
        }}
        >next</button>
        </div>

        ) 
   
}