import { ShowGame } from "./show";
import { useEffect, useState } from "react"


export const Form=()=>{

    const initstate = {gamename:"", gameauthor:"", gametags:"",gameprice:"",forkids:"",gamedesc:"",gamerating:""}
    const [gameData, setGameData] = useState(initstate);
    const [form, setForm] = useState([]);
    const [details, setDetails] = useState("");

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

const postData = (data) => {
    fetch(`http://localhost:3001/games`,{
        method:"POST",
        body: JSON.stringify(data),
        headers:{
            "Content-type":"application/json"
        }
    })
    .then((res)=> res.json())
    .then((res)=>{
        console.log(res)
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        getData();
    })
}

const handleChange = (e)=>{
    let {name,value} = e.target;
    setGameData({...gameData, [name]:value})
}

const handleSubmit =(e)=>{

postData(gameData);

}
const handleClick = (data) =>{
    setDetails(data)
}

    return(
        <div>
            <h1>hello world</h1>
            <form id="addgame" onSubmit={handleSubmit}>
            <input name="gamename" onChange={handleChange} placeholder="gamename"/>
           
            <input name="gameauthor" onChange={handleChange}  placeholder="gameauthor" required/>
            
             <input name="gametags" onChange={handleChange}  placeholder="gametags" required/>
            
              <input name="gameprice" onChange={handleChange} placeholder="gameprice" required/>
              
               <input name="forkids" type="checkbox" value="forkids" onChange={handleChange}  placeholder="forkids" required/>
               
                <textarea name="gamedesc"  onChange={handleChange} placeholder="gamedesc" required></textarea> 
                
                 <select name="gamerating" onChange={handleChange} placeholder="gamerating" required>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    </select>
   
     <input type="submit" value="submit" />
     
            </form>
            <br />
                        
                <ShowGame
                form={form}
                handleClick = {handleClick} />
                
            
        </div>
    )
}