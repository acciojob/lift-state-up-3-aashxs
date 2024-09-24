
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const[selectedOption,setOption]=useState("")

  function option(a){
    if (a==1){setOption("Option 1")}
    else{setOption("Option 2")}
  }
  return (
    <div style={{
      width:"700px",
      height:"400px",
      background:"green",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    }} className="parent">
      <h1>Parent Component</h1>
        <ChildComponent1 intial={selectedOption} final={option}/>
        <ChildComponent2 intial={selectedOption} final={option} />
        <p>Selected Option: {selectedOption}</p>
    </div>
  )
}

export default App
