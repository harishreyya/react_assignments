import { useState } from "react"
import "./redballon.css"

 export const Redballon = ()=>{

const [Click,setClick] = useState(false)

if(Click===true){
    return <div>
<div className="box">
<div onClick={()=>setClick(false)} className="circle">
circle
</div>
box
</div>

    </div>
}

if(Click===false){

return <div>

<div className="box">
box
</div>
<div onClick={()=>setClick(true)}    className="redcircle">
circle
</div>
<div onClick={()=>setClick(true)}    className="redcircle">
circle
</div>
<div onClick={()=>setClick(true)}    className="redcircle">
circle
</div>
<div onClick={()=>setClick(true)}    className="redcircle">
circle
</div>
<div onClick={()=>setClick(true)}    className="redcircle">
circle
</div>

</div>
 }

}