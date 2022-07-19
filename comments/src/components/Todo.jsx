import { useState } from "react"
import { nanoid } from "nanoid"
import { TodoInput } from "./TodoInput"
import { TodoList } from "./Todolist"
export const Todo = ()=>{
const [List,setList] = useState([])

const HandleAdd = (data)=>{
   const payLoad = {
       title:data,
       status:false,
       id:nanoid(4)
   }
   setList([...List,payLoad])
}

const handleDelete = (id)=>{
setList((prev)=>prev.filter((element)=>element.id!==id))
}

    return <div>
<TodoInput getData={HandleAdd}/>

<div>
    {List.map((item)=>{
        return <TodoList {...item} key={item.id} handleDelete={handleDelete}/>
    })}
</div>
    </div>
}