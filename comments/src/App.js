import React, {useState, useEffect} from "react"
import './App.css';

const fetchURL = "https://fast-reef-22226.herokuapp.com/data"
function App() {
  const [data, setData] = useState(null)
  const getData = () =>
    fetch(`${fetchURL}`)
      .then((res) => res.json())

 useEffect(() => {
    getData().then((data) => setData(data))
  }, [])




  return (
    <div className="App">
     
     <h1>all data shown here</h1>
      <div>
  {data?.map((item) => 
    <div className="show">
    <h5><strong>title:</strong>{item.WebName}</h5>
    <p><strong>url:</strong>{item.url}</p>
    <p><strong>description:</strong>{item.description}</p>
    <p><strong>author:</strong>{item.author}</p>
    <p><strong>creation_date:</strong>{item.creation_date}</p>
    <p><strong>explicit:</strong>{item.explicit}</p>
    <p><strong>quality:</strong>{item.quality}</p>
  <hr/>
    </div>
   
  )}
  
   </div>
    </div>
  );
}

export default App;
