import React, { useState } from "react";

export default function TextForm(props) {
  const convertUC = () => {
    setText(text.toUpperCase())
    text.length>0?props.showAlert("Converted to UpperCase","success"):props.showAlert("No Text Provided","warning")
  };

  const convertLC = () => {
    setText(text.toLowerCase())
    text.length>0?props.showAlert("Converted to LowerCase","success"):props.showAlert("No Text Provided","warning")
};

  const removeSpace = () => {
    setText(text.replaceAll(" ", ""));
    text.length>0?props.showAlert("Removed Spaces","success"):props.showAlert("No Text Provided","warning")
};

  const clearText = () => {
    setText("")
    text.length>0?props.showAlert("All Text Cleared","success"):props.showAlert("Already empty","warning")
};

  const handleOnChange = (event) => {
    console.log("handled on change");
    setText(event.target.value);
  };

  const GetActualLength = (sentence)=>{
    let words = sentence.split(" ")
    let len = words.length
    words.forEach(element => {
        if(element.length===0){len=len-1}
    })
    return len
  }
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color:props.theme==='dark'?'white':'black'}}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.theme==='dark'?'#1e406d':'white',color:props.theme==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-outline-primary mx-1" onClick={convertUC}>
          Convert to Uppercase
        </button>
        <button className="btn btn-outline-primary mx-1" onClick={convertLC}>
          Convert to Lowercase
        </button>
        <button className="btn btn-outline-primary mx-1" onClick={removeSpace}>
          Remove Spaces
        </button>
        <button className="btn btn-outline-primary mx-1" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color:props.theme==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.length === 0 ? 0 : GetActualLength(text)} words , {text.length}{" "}
          characters
        </p>
        <p>
          {text.length === 0 ? 0 : 0.008 * GetActualLength(text)} minutes to
          read
        </p>
        <h3>Preview</h3>
        <p>{text.length===0?"Enter text to preview":text}</p>
      </div>
    </>
  );
}
