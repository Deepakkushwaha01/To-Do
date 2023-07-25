import React, { useState } from 'react'
import './To.css'
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

export default function To(props) {
const[style,newstyle]=useState("none")
   
function cross(){
    if(sign=="✖️"){
newstyle("line-through")
newsign("✔️")
}
else{
    newstyle("none")
    newsign("✖️") 
}
}

const[sign,newsign]=useState("✖️")
    return (
    <>
       <div className='lower'>
        <p className='first' onClick={cross}>{sign}</p>
       {/* <RxCross2  /> */}
       <MdDelete  className='second' onClick={()=>{
        props.select(props.id)
       
       }}/>
     <ul>
      <li style={{textDecoration: style}}>{props.input}</li>
      </ul>
     </div>
    </>
  )
}
