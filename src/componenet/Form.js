import React, { useState } from "react";

export default function Form(props) {
  const [text, setText] = useState("");

  const touppercase = () => {
    let upcase = text.toUpperCase();
    setText(upcase);
    props.alertfunction("Text change to uppercase", "success");
  };
  const tolowercase = () => {
    let upcase = text.toLowerCase();
    setText(upcase);
    props.alertfunction("Text change to lowercase", "success");
  };
  const cleartext = () => {
    let cnf = window.confirm("are you sure you want to clear the text");
    if (cnf) {
      setText("");
      props.alertfunction("Text is cleared", "success");
    }
  };

  const handleonchange = (event) => {
    setText(event.target.value);
  };
  let sentence;
  let words;
  let char;
  let readingTime = 0;
  if (text.match(/[a-z]+/gi) !== null) {
    words = text.match(/[a-z]+/gi).length;
    readingTime = (0.4 / 125) * words;
  } else {
    words = 0;
  }
  if (text.match(/[a-z]/gi) !== null) {
    char = text.match(/[a-z]/gi).length;
  } else {
    char = 0;
  }
  if (text.match(/[.]/g) !== null) {
    sentence = text.match(/[.]/g).length;
    console.log(sentence);
  } else {
    sentence = 0;
  }


  const copytext=()=>{
    let input=document.getElementById("exampleFormControlTextarea1")
 input.select();
 navigator.clipboard.writeText(text);
 props.alertfunction("Text is Copied to Clipbord", "success");
  }
  const handleextraspace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.alertfunction("Extra space is removed from the text", "success");
  }
  return (
    <>
      <div>
        <div
          className="container mt-5"
          style={{ color:props.textcolor}}
        >
          <div className="mb-1">
            <h3>{props.label}</h3>
            <textarea
              className="form-control"
              style={{
                backgroundColor: props.textareabg,
                color: props.textareac,
              }}
              id="exampleFormControlTextarea1"
              rows="8"
              value={text}
              onChange={handleonchange}
            ></textarea>
          </div>
          <div className="btn-group">
            <a
              href="#"
              className="btn btn-primary active"
              aria-current="page"
              onClick={touppercase}
            >
              To Uppercase
            </a>
            <a
              href="#"
              className="btn btn-primary active mx-1"
              aria-current="page"
              onClick={tolowercase}
            >
              To Lowerrcase
            </a>
            <a
              href="#"
              className="btn btn-primary active mx-1"
              aria-current="page"
              onClick={cleartext}
            >
              Clear Text
            </a>
            <a
              href="#"
              className="btn btn-primary active mx-1"
              aria-current="page"
              onClick={copytext}
            >
            Copy Text
            </a>
            <a
              href="#"
              className="btn btn-primary active mx-1"
              aria-current="page"
              onClick={handleextraspace}
            >
             Handle Extra Space    
            </a>
          </div>
        </div>
      </div>
      <div
        className="container my-4"
        style={{color:props.textcolor}}
      >
        <h2>Your text summery</h2>
        <p>
          Total Words :- <b>{words}</b> Total character :- <b>{char}</b>{" "}
        </p>
        <p>
          Number of sentences -: <b>{sentence}</b>
        </p>
        <p>
          time taken in reading your content:- <b>{readingTime} minutes</b>{" "}
        </p>
        <h3>Preview</h3>
        <p>{text === "" ? "Please Write something to preview" : text}</p>
      </div>
    </>
  );
}
