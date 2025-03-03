import React, { useState } from 'react'

const Demo8 = () => {
    let [disp, setDisp] = useState("none")
    let [x, setX] = useState(0)
    let [y, setY] = useState(0)

    let handleRightClick = (event)=>{
        let x1 = event.clientX;
        let y1 = event.clientY;
        event.preventDefault();
        setDisp("block")
        setX(x1)
        setY(y1)
    }
    
    let clickHandler = ()=>{
        setDisp("none")
    }

  return (
    <>
    <div onClick={clickHandler} onContextMenu={(e)=>handleRightClick(e)} style={{width : "100%", minHeight : "700px"}}>
        
    </div>

    <div style={{
        backgroundColor : "#1386bf",
        minHeight : "100px",
        width : "200px",
        position : "absolute",
        left : x,
        top : y,
        
        boxShadow : "5px 5px 5px #000",
        display : disp
    }}>
        <ul style={{margin : "0px", padding : "0px", listStyle : "none"}}>
            <li>
                <a style={{display : "block", color : "#fff", textDecoration : "none", margin : "10px", padding : "10px"}} href=''>Group Info</a>
            </li>
            <li>
                <a style={{display : "block", color : "#fff", textDecoration : "none", margin : "10px", padding : "10px"}} href=''>Mute Notification</a>
            </li>
            <li>
                <a style={{display : "block", color : "#fff", textDecoration : "none", margin : "10px", padding : "10px"}} href=''>Group Message</a>
            </li>
            <li>
                <a style={{display : "block", color : "#fff", textDecoration : "none", margin : "10px", padding : "10px"}} href=''>Group Message</a>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Demo8