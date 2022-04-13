// import './App.css';
import Navbar from "./componenet/Navbar";
import Form from "./componenet/Form";
import About from "./componenet/About";
import React, { useState } from "react";
import Alert from "./componenet/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
 
  const [navmode, setnavmode] = useState(" #cccccc");
  const [modeName, setmodeName] = useState("Dark Mode");
  const [textcolor,settextcolor]=useState("black")
  const [alert, setalert] = useState(null);
  const [textareabg,settextareabg] = useState(null);
  const [textareac,settextareac] = useState(null);
 

  const alertfunction = (message, color) => {
    setalert({
      message,
      color,
    });
  };
  if (alert) {
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  // for dark and light mode
  const funforMode = () => {
    if (modeName == "Dark Mode") {
     
      setmodeName("Light Mode");
      setnavmode("#1a1a1a");
      settextcolor("white");
      settextareabg("#262626");
      settextareac("white");
      document.body.style.backgroundColor = "#333333";
      alertfunction("Dark Mode is active", "success");
      document.title = "Dark Mode is active";
    } 
    else {
      setmodeName("Dark Mode");
      settextcolor("black")
      setnavmode("#cccccc");
      settextareabg("white")
      settextareac("black");
      document.body.style.backgroundColor = "white";
      alertfunction("Light Mode is active", "primary");
      document.title = "Light Mode is active";
    }
  };
// for blue mode
const setbluemodefun=()=>{

    setnavmode("#00004d");
    settextcolor("white");
    settextareabg("#000066")
    settextareac("white");
    document.body.style.backgroundColor = "#000080";
    alertfunction("Blue Mode is active", "success");
      document.title = "Blue Mode is active";

}
const setgreenmodefun=()=>{
  setnavmode("#003300");
    settextcolor("white");
    settextareabg("#004d00")
    settextareac("white");
    document.body.style.backgroundColor = "#009900";
    alertfunction("Green Mode is active", "success");
      document.title = "Green Mode is active";
}
const newcolorfun=()=>{
  setnavmode(" #002e4d");
  settextcolor("white");
  settextareabg("#004d80")
  settextareac("white");
  document.body.style.backgroundColor = "#005c99";
  alertfunction("New Color Mode is active", "success");
    document.title = "New Color Mode is active";
}
  return (
    <>
    <Router>
       <Navbar
        home="Home"
        contact="Contact Us"
        // mode={mode}
        setmode={funforMode}
        navmode={navmode}
        modeName={modeName}
        setbluemode={setbluemodefun}
        textcolor={textcolor}
        setgreenmodefun={setgreenmodefun}
        newcolorfun={newcolorfun}
      />
      <Alert alert={alert} />
      
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Form
              label="Please write something to analize"
              navmode={navmode}
              alertfunction={alertfunction}
              textcolor={textcolor}
              // setbluemode={setbluemodefun}
              textareabg={textareabg}
              textareac={textareac}
              // setgreenmodefun={setgreenmodefun}
              // newcolorfun={newcolorfun}
            />
          </Route>
        </Switch>
      </Router>


      {/* <Alert alert={alert} /> */}
      {/* <Form
        label="Please write something to analize"
        mode={mode}
        alertfunction={alertfunction}
      /> */}

      {/* <About /> */}
    </>
  );
}

export default App;
