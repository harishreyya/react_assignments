
import { useState } from "react"
import {nanoid} from "nanoid"
import { PracTodoInput } from "./PracTodoInput"
import { PracTodoList } from "./PracTodoList"
export const PracTodo = (text) =>{

    const [todo,setTodo] = useState([])

    const getItems = (text) =>{
        const payload = {
            title : text,
            status:false,
            id:nanoid(4)

        }
        setTodo([...todo,payload])
    }

   

    const handleDelete = (id) =>{
        setTodo((todo)=>todo.filter((text)=>text.id!==id))
    }


    return <div>
        <PracTodoInput getItems={getItems}/>
        {todo.map((e) => <PracTodoList key={e.id} {...e} handleDelete={handleDelete} />)}
    </div>
}
