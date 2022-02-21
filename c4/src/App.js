
import './App.css';
import {Show} from "./components/Show"
import {Navbar} from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import {Home} from "./components/Home"
import { Titles } from './components/Titles';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/Show" element={<Show/>}></Route>
       <Route path="/Titles" element={<Titles/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
