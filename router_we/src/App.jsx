import logo from './logo.svg';
import './App.css';
import {Route,Router, Routes} from 'react-router-dom';
import {Navbar} from "./components/Navbar";
import { Home } from './components/home';
import { About } from './components/about';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
<Route path = "/" element = {<Home/>}></Route>
<Route path = "/" element = {<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
