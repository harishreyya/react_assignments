import { getDefaultNormalizer } from "@testing-library/react";
import { useEffect, useRef, useState } from "react"


export const Form=()=>{

    const initstate = {gamename:"", gameauthor:"", gametags:"",gameprice:"",forkids:"",gamedesc:"",gamerating:""}
    const [gameData, setGameData] = useState(initstate);
    const [form, setForm] = useState([]);

useEffect(()=>{
    getData();
},[])

const getData=()=>{
fetch(`http://localhost:3001/games`).then((res)=> res.json())
.then((res)=>{
    setForm(res)
})
.catch((error)=>{
    console.log(error)
})

}



    return(
        <div>
            <form id="addgame">
            <input name="gamename" />
            <br/>
            <input name="gameauthor" />
            <br/> 
             <input name="gametags" />
             <br/> 
              <input name="gameprice" />
              <br/>
               <input name="forkids" type="checkbox" value="forkids" />
               <br/>
                <textarea name="gamedesc" ></textarea> 
                <br />
                 <select name="gamerating" >
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    </select>
    <br />
     <input type="submit" value="submit" />
     <br/>
            </form>
        </div>
    )
}