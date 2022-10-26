// import { useEffect, useState } from "react"

// export const Fetch = ()=>{

//   const [data,setData] = useState(null);

//   const getData = () =>
//   fetch("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
//   .then((res)=>res.json())

//   useEffect(()=>{
//     getData().then((data)=>setData(data))
//   },[])

//   return <div>
//     <h1>hie</h1>
//     {data.map((item)=>
//     <div>
//      <p>{item.name}</p> 
//     <p>{item.email}</p>
//       <hr/>
//       </div>)}
//   </div>
// }

{/* import './App.css';
import React, {useState, useEffect} from "react"
const fetchURL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"

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
      <h1>admins</h1>

     {data?.map((item) => 
    <div className="show">
      <div className='flex'>
    <p>{item.id} </p> <p>{item.name} </p>     <p>{item.email} </p>   <p>{item.role} </p>                    
   </div>
    <hr />
    </div>
   
  )}
  
   </div>
    
  );
}

export default App;   */}