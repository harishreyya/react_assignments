import { useState , useEffect} from "react";

const Id = "56ac0be7";
const key = "04bb013870757a05404fd8e5f41c772c";

export const map = ()=>{

    const[data,setData] = useState(null)
    const [query,setQuery] = useState('chicken')
    
   const getData =()=>
    fetch(`https://api.edamam.com/search?q=chicken&app_id=56ac0be7&app_key=04bb013870757a05404fd8e5f41c772c`
    )
    .then((res)=>res.json())
    console.log(data)
useEffect(()=>{
getData().then((data)=>setData(data))
console.log(data)
},[])

    return (
        <div>
{data.map((recipe)=>
<div>
<h1 >{recipe.recipe.label}</h1>
            <img  src={recipe.recipe.image} alt="/" />
            <p>{recipe.recipe.calories}</p>

           
</div>
)}
        </div>
    )
}