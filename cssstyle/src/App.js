import './App.css';
// import { Flex } from './components/Flex';
// import {Button} from "./components/Button"
// import { useState } from 'react';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material';
function App() {
  // const [theme,setTheme] = useState("light")
  return (
    <div className="App">
      
      {/* <Button theme = {theme}>click me</Button>
      <button onClick={()=>{
        setTheme(theme ==="light"? "dark" : "light")
      }}>change theme</button>
      <Flex>
        <div>one</div>
        <div>two </div>
        <div>three</div>
      </Flex> */}

      <Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<svg data-testid="DeleteIcon"></svg>

<h1>checking ui</h1>
<HomeIcon />
    </div>
  );
}

export default App;
