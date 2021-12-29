import {useState} from "react";
import './App.css';

function App() {
  const[count,setCount] = useState(0)
  const handleCounter = () => {
    if(count<= 0) {
      return;
    } else {
      setCount(count - 1);
    }
    
  }
  const Increment = (value) => {
    setCount(count + value)
  }
  const double = () => {
    setCount(count * 2)
  }
  
  return (
    <div className="App">
     <h1>Counter: {count}</h1>
     <button  className="increment" onClick={ () => Increment(1)} >AddOne</button>
     <br></br>
     <button className="reduce" onClick={handleCounter}>ReduceOne</button>
     <br></br>
     <button className="double" onClick={double}>Double</button>
    
    </div>
  );
}

export default App;
