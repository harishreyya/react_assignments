import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const ProductsDetails =()=>{
    const [product,setProductId]=useState([]);

    let {id} = useParams();
    
    useEffect(()=>{
        getProductId();
    },[])

    const getProductId = ()=>{
        fetch(`http://localhost:3001/products/${id}`)
        .then(d=>d.json())
        .then((res)=>{setProductId(res)});
    }
    return (
        <>
        <h1>Products Details</h1>
        <table className="table">
         <tr>
              <th >Name</th>
              <th>Price</th>
              <th>ID</th>
            </tr>
      
            
            <tr >
              <td >{product.name}</td>
              <td>{product.price}</td>
              <td>{product.id}</td>
            </tr>
            
         
        
         </table>
        
        </>
    )
}