import { useState } from "react"

export const Form = () =>{
const [formData, setFormData] = useState({
  username:"",
  age:"",
  email:"",
})

    const handleChange =(e)=>{
        const {name} = e.target
 setFormData({
     ...formData,
    [name] : e.target.value
 })
    }
    return (
        
        <form 
        onSubmit={(e)=>{
            e.preventDefault()
            console.log(formData)
        }}>
            <input onChange={handleChange} 
            name="username"
            type="text" placeholder="enter username"
            />
            <input onChange={handleChange} 
            name = "age"
            type="number" placeholder="enter age"/>

<input onChange={handleChange}  
            name = "email"
            type="email" placeholder="enter email"/>

            <button type="submit" value="submit" >submit</button>
            
        </form>
        
        
    )
}