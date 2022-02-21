import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const Titles = ()=>{
    const [titles,setTitles] = useState([]);
    useEffect(()=>{
        fetch("https://fast-reef-22226.herokuapp.com/data")
        .then((x)=> x.json())
        .then(({data})=> setTitles(data));
    },[]);

    return <div>
        {titles.map((e,i)=>(

        <p key={i}>
            Title{e.id} - <Link to = {`/titles/${e.id}`}>{e.title}</Link>
        </p>

        ))}
    </div>
}