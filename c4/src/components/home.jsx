import { useEffect, useState } from "react"
import axios from "axios"
export const Home = ()=>{
const [view,setView] = useState([])
const [viewmatch,setViewmatch]= useState([]);

useEffect(()=>{
    const load = async ()=>{
        const response = await axios.get("https://fast-reef-22226.herokuapp.com/data");
        setView(response.data)
    };

    load()
},[])
console.log(view)

const searchview = (text)=>{
let matches = view.filter((viewed)=>{
    const regex = new RegExp(`${text}`);
    return viewed.title.match(regex) 
})
setViewmatch(matches)
}

    return <div>
<img className="logo"   src="https://cdn.vox-cdn.com/thumbor/ULiGDiA4_u4SaK-xexvmJVYUNY0=/0x0:640x427/1400x1050/filters:focal(0x0:640x427):format(jpeg)/cdn.vox-cdn.com/assets/3218223/google.jpg" alt="prop"/>
<br />
<input className="search-box" placeholder="search" type="text" onChange={(e)=>searchview(e.target.value)}/>
{viewmatch && viewmatch.map((item,index)=>{
  
  return   <div title={`${item.title}`}>
   
</div>
})}

<button className="search">Search</button>
<br />
<button id="sort-alphabetically">ASC</button>
<button id="sort-alphabetically-desc">DESC</button>
<button id="sort-by-date">date ASC</button>
<button id="sort-by-date-desc">date DESC</button>
<button id="sort-by-quality">quality ASC</button>
<button id="sort-by-quality-desc">quality DESC</button>
<button id="filter-explicit">filter</button>

    </div>
}