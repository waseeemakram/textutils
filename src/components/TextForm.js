import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper case", "success");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower case", "success");
    }
    const handleCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copy to clipboard", "success");
        
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
  return (
    <>
        <div className="conatainer"  style={{color:props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
        </div>
        <div className="conatainer my-3"  style={{color:props.mode === 'dark'?'white':'black'}}>
            <h1>Your text summary </h1>
            <p>{text.split(" ").length} word and {text.length} character</p>
            <p>{0.008 * text.split(" ").length} Minute Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something to preview'}</p>
        </div>
    </>
    )
}
