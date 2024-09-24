import React from 'react'

const ChildComponent1 = (props) => {
  return (
    <div style={{
        width:"500px",
        height:"100px",
        background:"orange"
    }}>
        <h1>Child Component 1</h1>
        <button key={1} onClick={()=>props.final(1)}>Option 1</button>
    </div>
  )
}

export default ChildComponent1