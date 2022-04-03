
import './App.css';
import React, {useState, useEffect} from "react"

const fetchURL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json?_page=1&_limit=3"

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
      <h1>users</h1>
     

     {data?.map((item) => 
    <div className="show">
      <div className='flex' >
    <input type="checkbox"/> <p>{item.name} </p>     <p>{item.email} </p>   <p>{item.role} </p>  
    
          
   </div>
    <hr />
    </div>
   
  )}
 
   </div>
    
  );
}

export default App;

