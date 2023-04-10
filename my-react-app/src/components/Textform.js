import React, { useState } from 'react';

export default function Textform(props) {

    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }

    const handleLoClick = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClClick = () => {
        console.log("Cleartext was clicked");
        let newText = text.replace(text, "");
        setText(newText);
    }

    const handleCopy = () => {
        console.log("Copytext was clicked");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const [text, setText] = useState("");

    return (
        <div className='container my-4'>
            <h3>Enter your text to analyze</h3>
            <div className="mb-3">
                <textarea id='myBox' className="form-control" value = {text} placeholder = 'Enter text here' onChange={handleOnChange} rows="10"></textarea>
            </div>
            <button type="submit" className="btn btn-dark mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button type="submit" className="btn btn-dark" onClick={handleLoClick}>Convert to lowercase</button>
            <button type="submit" className="btn btn-dark mx-2" onClick={handleCopy}>Copy text</button>
            <button type="submit" className="btn btn-dark mx-2" onClick={handleClClick}>Clear text</button>
            <p> <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
            <p><b>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</b> minutes read</p>
        </div>
    )
}
