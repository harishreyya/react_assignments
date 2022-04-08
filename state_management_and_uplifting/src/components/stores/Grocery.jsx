import React from "react"
import { GroceryInput } from "./GroceryInput"
import { GroceryList } from "./GroceryList"
import { v4 as uuid } from "uuid"
import {useState} from "react"



export  const Grocery = (item) => {
    const [value,setValue] = useState([])
    const GetItem = (item)=>{

      const groceryItems = {
      name:item,
      state:false,
      id:uuid()
      }
      setValue([...value,groceryItems])
      }


      const DeleteItem = (id) =>{
        setValue((value)=>value.filter((item) => item.id !== id))
       
      }
      
    return (
        <>
        <GroceryInput GetItem={GetItem} />
        {value.map((e)=> <GroceryList key={e.id} {...e} DeleteItem={DeleteItem} />)}
        </>
    )
}
