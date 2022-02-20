
import { useState } from 'react';
import './App.css';

function App() {
const[show,setShow] = useState(true);

if(show===false){
  return <div className="App">
    <button onClick={()=> setShow(true)}>show</button>
  </div>
}


  return (
    <div className="App">
   <div>
     <h1>harish</h1>
     <h1>adress</h1>
   </div>
   <button onClick={()=>setShow(false)} >hide</button>
    </div>
  );
}

export default App;
