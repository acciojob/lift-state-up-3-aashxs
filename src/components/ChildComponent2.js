import React from 'react'

const ChildComponent2 = (props) => {
  return (
    <div style={{
        width:"500px",
        height:"100px",
        background:"yellow"
    }}> 
        <h1>Child Component 2</h1>
        <button key={2} onClick={()=>props.final(2)}>Option 2</button>
    </div>
  )
}

export default ChildComponent2