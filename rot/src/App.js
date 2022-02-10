
import './App.css';
import {Home} from "./components/Home"
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { UserDetails } from './components/UserDetails';
import {Users} from "./components/Users"
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/About' element={<About/>}></Route>
       <Route path='/Contact' element={<Contact/>}></Route>
       <Route path='/users' element={<Users/>}></Route>
       <Route path='/users/:userid' element={<UserDetails/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
