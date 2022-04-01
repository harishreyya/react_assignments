import React, {useState, useEffect} from "react"
import './App.css';

const fetchURL = "https://fast-reef-22226.herokuapp.com/data"
function App() {
  const [data, setData] = useState(null)
  const getData = () =>
    fetch(`${fetchURL}`)
      .then((res) => res.json())

 useEffect(() => {
  console.log(data)
    getData().then((data) => setData(data))
  
  }, [])




  return (
    <div className="App">
     
     <h1>all data shown here</h1>
      <div>
  {data?.map((item) => 
    <div className="show" >
    <h5><strong>title:</strong>{item.WebName}</h5>
    <hr/>
    </div>
   
  )}
  
   </div>


   <input onChange={e.target.value} placeholder="kuch bhi likho"/>
   <input type="submit"/>

    </div>
  );
}

export default App;
