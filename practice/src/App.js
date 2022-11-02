
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
        <h1> Please do open in mobile device only</h1>
    <label class="common" for="front"> to capture photo using FRONT camera :</label>
    <input id="front" type="file" capture="user" accept="image/*" />
    <label class="common" for="front"> to capture photo using BACK camera :</label>
    <input type="file" capture="environment" accept="image/*" />
    <label class="common" for="front"> to record video using FRONT camera :</label>
    <input id="front" type="file" capture="user" accept="video/*" />
    <label class="common" for="front"> to record video using BACK camera :</label>
    <input type="file" capture="environment" accept="video/*" />
      </div>

      <CountDown/>
    </div>
  );
}

export default App;
