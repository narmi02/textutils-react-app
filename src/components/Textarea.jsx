import React, { useState } from 'react'

export default function Textarea(props) {

  const capclick=()=>{
    let newtext=text.toUpperCase()
    settext(newtext)
    props.showalert("Converted to Uppercase","success")
  }
  const lowclick=()=>{
    let newtext=text.toLowerCase()
    settext(newtext)
    props.showalert("Converted to lowercase","success")

  }
  const copyclick=()=>{
    let text=document.getElementById("mybox")
    text.select()
    navigator.clipboard.writeText(text.value)
    props.showalert("copied text","success")
    document.getSelection().removeAllRanges()
  }
  const remoexspclick=()=>{
    let newtext=text.split(/[ ]+/)
    settext(newtext.join(" "))
    props.showalert("space removed!!","success")

  }
  
  const onchange=(event)=>{
    settext(event.target.value)
  }
  const [text,settext]=useState("")
  return (
    <>
     <div className='container mt-3' style={{color:props.mode=="dark"?"white":"black"}}>
      <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.text}</label>
    <textarea className="form-control mt-2" style={{backgroundColor:props.mode=="light"?"rgb(241, 242, 242)":"black",color:props.mode=="light"?"black":"white"}}  onChange={onchange} id="mybox" rows="9"></textarea>
       <button type="button" disabled={text.length===0} onClick={capclick}  className={`btn btn-outline-info mt-3 text-${props.mode=="dark"?"white":"black"} mx-2 my-1`}> Capitalize </button>
       <button type="button" disabled={text.length===0} onClick={lowclick}  className={`btn btn-outline-info mt-3 text-${props.mode=="dark"?"white":"black"} mx-2 my-1`}>Lowerize</button>
       <button type="button" disabled={text.length===0} onClick={copyclick}  className={`btn btn-outline-info mt-3 text-${props.mode=="dark"?"white":"black"} mx-2 my-1`}>Copy</button>
       <button type="button"disabled={text.length===0} onClick={remoexspclick}  className={`btn btn-outline-info mt-3 text-${props.mode=="dark"?"white":"black"} mx-2 my-1`}>Remove Extra Space</button>

    </div>
      <div className="container my-2" style={{color:props.mode=="dark"?"white":"black"}}>
      <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} word and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length} minutes takes to read words</p>
        <h3>Preview</h3>
        <p> {text.length>0 ? text:"Nothing to show preview!"} </p>
      </div>
      </>
  )
    
}
