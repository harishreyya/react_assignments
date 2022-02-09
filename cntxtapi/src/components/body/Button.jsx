import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

export const Button =()=>{
    const {handleCart} = useContext(CartContext)
    return (
    <button onClick={()=>{
        handleCart(1)
    }}>Add to Cart</button>
    )
}