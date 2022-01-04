import React from "react"

function GroceryList({ title, id, status, handleToggle, handleDelete }) {
    return <div>
        <h3>{title}</h3>
        <button onClick={() => handleToggle(id)}>{status ? "BOUGHT" : "NOT BOUGHT" } </button>
        <button onClick={(id)=>{ handleDelete(id)}}> DELETE</button>
    </div>
}

export { GroceryList }