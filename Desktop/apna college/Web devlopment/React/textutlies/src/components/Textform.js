import React, { useState } from 'react'

export default function Textform(props) {

    const handleUPClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }

    const handleonchange =(event)=>{
             setText(event.target.value)
    } 
    const [text, setText] = useState('Enter Text here 2');
    return (

      <div>
         
        <h1>{props.heading}</h1>
      <div className="mb-3">
    
        <textarea className="form-control"  value={text}  onChange={handleonchange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUPClick} >Convert to UPPERCASE</button>
      </div>
    )
}
