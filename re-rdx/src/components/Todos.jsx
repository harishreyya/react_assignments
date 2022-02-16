import { useState } from "react";
import {shallowEqual, useDispatch, useSelector } from "react-redux"
import { addTodo } from '../redux/action';
export const Todos =()=>{
    const todos = useSelector((store)=> store.todos)
    //shallowEqual
    // function equalityFn(prev,curr){
    //     if(prev.loading==curr.loading){
    //         return true;
    //     }else{
    //        return false;
    //     }
    // })
    const dispatch = useDispatch();
    const [text,setText] = useState();
return <div>
    <input placeholder="add todos" type="text" onChange={e => setText(e.target.value)} />
    <button onClick={
        (e)=>{dispatch(addTodo({id: Date.now(), title:text, status: false}))}}
        
       >add todos</button>
    <div>{todos.map((e)=>{
        return  <div key={e.id}>{e.title}</div>
    })}</div>
</div>
}