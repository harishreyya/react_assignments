

import React, {useState, useEffect} from "react"
const fetchURL = "https://fast-reef-22226.herokuapp.com/data"
export const Show = () => {
  const [data, setData] = useState(null)
  const getData = () =>
    fetch(`${fetchURL}`)
      .then((res) => res.json())

 useEffect(() => {
    getData().then((data) => setData(data))
  }, [])
  return  <div>
  {data?.map((item) => 
    <div>
    <p>{item.title}</p>
    </div>
  )}
</div>
}