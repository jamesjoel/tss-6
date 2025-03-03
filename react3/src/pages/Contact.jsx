import React, { useState } from 'react'

const Contact = () => {

  let [color, setColor] = useState("black")
  
  let demo1 = ()=>{
    setColor("red");
  }
  let demo2 = ()=>{
    setColor("blue");
  }
  let demo3 = ()=>{
    setColor("green");
  }

  return (
    <>
    <div style={{backgroundColor : color, height : "200px", width : "200px"}}></div>
    <button onMouseOver={demo1}>RED</button>
    <button onMouseOver={demo2}>BLUE</button>
    <button onMouseOver={demo3}>GREEN</button>
    </>
  )
}

export default Contact