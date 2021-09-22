import React, { useState } from 'react'

export default function Textform(props) {

    const handleUPClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }

    const handlelowClick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
  }

    const handleonchange =(event)=>{
             setText(event.target.value)
    } 
    const [text, setText] = useState('');
    return (
      <>

      <div className="container">
         
        <h1>{props.heading}</h1>
      <div className="mb-2">
    
        <textarea className="form-control"  value={text}  onChange={handleonchange} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUPClick} >Convert to UPPERCASE</button>
      <button className="btn btn-success mx-1" onClick={handlelowClick} >Convert to Lowercase</button>
      </div>
      <div className="container my-3" >
        <h2>Your text summary</h2>
        <p> { text.split(" ").length}  Words and {text.length} Characters</p>
        <p> {0.008* text.split(" ").length } Minutes take to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </>
    )
}
