import { useState } from "react"

const initState = {
    name: "",
    address: "",
    email: "",
    password: ""
  }
  
 export const Form = ({postData})=>{
    const [state, setState] = useState(initState)
    const handleChange = e => {
      const {name, value} = e.target
      setState( { ...state, [name]: value} )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        postData(state)
        console.log(state)
    }
    return (
      <div>
          <form onSubmit={handleSubmit}>
          <div>
            <input type="text" name="name" placeholder="name" value={state.name} onChange={handleChange} />
          </div>
          <div>
            <input type="text" name="address" placeholder="address" value={state.address} onChange={handleChange} />
          </div>
          <div>
            <input type="text" name="email" placeholder="email" value={state.email} onChange={handleChange} />
          </div>
          <div>
            <input type="password" name="password" placeholder="password" value={state.password} onChange={handleChange} />
          </div>
          <input type="submit" value="submit" />
          
        {/* {state.map((e,i) => (
            <div key = {i} >{e.name}</div>
        ))} */}
</form>
      </div>
    )
  
  }