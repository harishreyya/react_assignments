
import './App.css';

import {Cal} from "./components/calculater"
import { Counter } from './components/counter';
import {CountDown} from "./components/timer";
function App() {

  return (
    <div className="App">
     
    {/* <Counter/>

      <Cal/> */}
      <div>
        <a href='tel:+917002092915'>call harish</a>
      </div>

      <CountDown/>
    </div>
  );
}

export default App;
