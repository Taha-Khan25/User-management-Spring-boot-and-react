import React, {useState} from "react"

export default function TextForm(props) {

  const handleUpClick = ()=> {
    console.log("up click")
    let newText=text.toUpperCase()
    setText(newText)
  }

  const handleLowClick = ()=> {
    console.log("Low click")
    let newText=text.toLowerCase()
    setText(newText)
  }

  const handleOnChange = (event)=> {
    console.log("on changed");
    setText(event.target.value)
  }  

  const handleClear = ()=> {
    setText("")
  } 

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const [text, setText] = useState("");

        var wordLength
      if(text ==="")
      {
        wordLength=0
      }
      else{
        wordLength= text.split(" ").length
      }
      

  return (
    <>
      <div className="container my-4" style={{color: props.mode==='dark'?'white':"black"}}>
        <h1>{props.TextHeading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            placeholder="Enter the text"
            rows="10"
            style={{backgroundColor: props.mode==='dark'?'grey':"white"
            ,color: props.mode==='dark'?'white':"black"}}
          ></textarea>
        </div>

        <button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>
          Covert to UpperCase
        </button>

        <button type="button" className="btn btn-primary mx-1" onClick={handleLowClick}>
          Covert to LowerCase
        </button>

        <button type="button" className="btn btn-primary mx-1">
          Copy to Clipboard
        </button>

        <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

        <button type="button" className="btn btn-danger mx-1" onClick={handleClear}>
          Clear
        </button>

      </div>

      

      <div className="container" style={{color: props.mode==='dark'?'white':"black"}}>
        <h1>Text Summary</h1>
        <p>
        {wordLength} Words and {text.length} Characters
        </p>
        <h2>Preview</h2>
        <p>
          {text}
        </p>
      </div>
    </>
  );
}

TextForm.defaultProps={

  TextHeading: "This is default text"
}

