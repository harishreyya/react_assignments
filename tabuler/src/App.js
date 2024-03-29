
import './App.css';
import JSONDATA from "./table.json"
import { useState } from 'react';

function App() {
  const[searchTerm,setSearchTerm] = useState("")
  return (
    <div className="App">
      <input type="text" placeholder="search" onChange={(e)=>{setSearchTerm(e.target.value)}}/>
      
   
    {JSONDATA.filter((val)=>{
      if(searchTerm===""){
  
        return val 
      }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }
    }).map((val,key)=>{
      if(searchTerm===""){
        return <div></div>
      }else{
      return <div  className='transparent' key={key}>
        <p>{val.first_name}</p>
      </div>}
    })}
     </div> 
  );
}

export default App;
