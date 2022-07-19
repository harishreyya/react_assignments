import { useEffect, useState } from "react"



export const Todo=()=>{
const[Value,setValue]=useState("");
const[Todo,setTodo]=useState([])
const [page,setPage]=useState(1)

useEffect(()=>{
    
getData()

},[page])
const getData = ()=>{
fetch(`http://localhost:3001/Todos?_page=${page}&_limit=3`).then(d=>d.json()).then(res=>{setTodo(res)})

}


return <div>
    <input onChange={(e)=>setValue(e.target.value)} placeholder="write"/>
    <button onClick={()=>{
        const data = {status: false,title:Value,}
        fetch(" http://localhost:3001/Todos",{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                "content-type":"application/json"
            },
        }).then(getData)
    }}>add writes</button>
{Todo.map(e=> <div key={e.id}>
{e.title}

</div>)}

<button onClick={()=>setPage(page-1)}>prev</button>
<button onClick={()=>setPage(page+1)}>next</button>
</div>

}