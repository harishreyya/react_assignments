import {useState} from "react";
import './App.css';

function App() {
  const[count,setCount] = useState(0)
  // const handleCounter = () => {
  //   // if(count<= 0) {
  //   //   return;
  //   // } else {
  //   //   setCount(count - 1);
  //   // }
    
  // // }
  // // const Increment = (value) => {
  // //   setCount(count + value)
  // // }
  // const double = () => {
  //   setCount(count * 2)
  // }

  // if (count > 25){
  //   return <div>
      
  //     <h1> The has reached maximum limit which is more than 25 </h1>

  //   </div>
  // }
  
  return (
    <div className="App">
     <h1>The count is {count}</h1>
     <button  className="increment" onClick={() => setCount(count+1)} >AddOne</button>
     <br/>
     <br/>

     <button className="reduce" onClick={() => setCount(count-1)}>ReduceOne</button>
     <br/>
     <br/>
     <button className="double" onClick={() => setCount(count*2)}>Double</button>
    
    </div>
  );
}

export default App;
