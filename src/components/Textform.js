import React, { useState } from 'react'

export default function Textform(props) {
    const[text,setText]=useState("");
    const [prevText, setPrevText] = useState("");
    const handleUpClick = () =>{
        setPrevText(text);
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper Case", "success");
    }
    const handlelowClick = () =>{
        setPrevText(text);
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower Case", "success");
    }
    const handleexspaceClick = () =>{
        setPrevText(text);
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }
    const handlecopyClick = () =>{
        setPrevText(text);
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();//for unselecting text
        props.showAlert("Copied to clipboard", "success");
    }
    const handleclearClick = () =>{
        setPrevText(text);
        setText("");
        props.showAlert("Cleared the box!", "warning")
    }
    const handleUndoClick = () => {
        setText(prevText);
        setPrevText("");
        props.showAlert("Undo successful", "success");
      };
    const handleOnChange = (event) =>{
        setPrevText(text);
        setText(event.target.value);
        var txt = document.getElementById("1");
        if(event.target.value ===""){
            txt.innerText = "0 words and 0 characters"
        }
        else{
            txt.innerText = `${text.split(" ").length} words and ${text.length} characters`;
        }
    }
  return (
    <>
    <div className='container'>
        <h2 className='mb-4' style={{color:props.mode === 'light'? 'black':'white'}} >{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'light'? 'white':'#3d4043', color:props.mode === 'light'? 'black':'white'}} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} type="button" className="btn btn-success mx-2 my-2"onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button disabled={text.length===0} type="button" className="btn btn-success mx-2 my-2" onClick={handlelowClick}>Convert to LOWERCASE</button>
        <button disabled={text.length===0} type="button" className="btn btn-success mx-2 my-2" onClick={handlecopyClick}>Copy Text</button>
        <button disabled={text.length===0} type="button" className="btn btn-success mx-2 my-2" onClick={handleexspaceClick}>Remove Extra Spaces</button>
        <button disabled={text.length===0} type="button" className="btn btn-success mx-2 my-2" onClick={handleclearClick}>Clear Text</button>   
        {prevText && (
          <button disabled={text.length===0} type="button" className="btn btn-primary mx-2 my-2" onClick={handleUndoClick}>Undo</button>
        )}
    </div>
    <div className="container my-3"> 
    <h2 style={{color:props.mode === 'light'? 'black':'white'}}>Your Text Summary</h2>
    {/*<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and ${text.length} characters</p> */}
    <p id='1' style={{color:props.mode === 'light'? 'black':'white'}}>Your Word Count</p>
    <p style={{color:props.mode === 'light'? 'black':'white'}}>
        {0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read
    </p>
    <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
//my-3 for spacing
//in {{}} first curly brace for javascript and next for an object