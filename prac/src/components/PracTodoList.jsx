

export const PracTodoList = ({title,status,id,handleDelete}) =>{
    return <div>
<p>{title}</p>
<button onClick={()=>handleDelete(id)}>delete</button>
    </div>
}