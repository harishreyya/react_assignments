import './App.css';
import { Flex } from './components/Flex';
import {Button} from "./components/Button"
import { useState } from 'react';
function App() {
  const [theme,setTheme] = useState("light")
  return (
    <div className="App">
      
      <Button theme = {theme}>click me</Button>
      <button onClick={()=>{
        setTheme(theme ==="light"? "dark" : "light")
      }}>change theme</button>
      <Flex>
        <div>one</div>
        <div>two </div>
        <div>three</div>
      </Flex>
    </div>
  );
}

export default App;
