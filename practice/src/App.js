
import './App.css';
import { useState } from 'react';

function App() {
const[state,setState]=useState(0)
// const increment = ()=>{
//   setState(state + 1)
// }

if(state==25)
return <div>reached maximum</div>
  return (
    <div className="App">
     
      <h1>{state}</h1>
      <button onClick={()=>setState(state+1)}>button</button>
    </div>
  );
}

export default App;
