import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export const Cart = ()=> {


    const {cart} = useContext(CartContext);
return <div>cart : {cart}</div>
}