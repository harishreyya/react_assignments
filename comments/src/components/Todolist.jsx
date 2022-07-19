

export const TodoList=({title,id,handleDelete})=>{
    return <div>
        <p>{title}</p>
        <button onClick={()=>handleDelete(id)}>delete</button>
    </div>
}