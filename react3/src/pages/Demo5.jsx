import React, { useState } from 'react'

const Demo5 = () => {
    let [x, setX] = useState(0)
    let [y, setY] = useState(0)

    let handleMouseMove = (event)=>{
        setX(event.clientX)
        setY(event.clientY-112)
    }

  return (
    <>
    <h1>X axis : {x}, Y axis : {y}</h1>
    <div onMouseMove={(e)=>handleMouseMove(e)} style={{backgroundColor : "#ccc", height : "700px", width : "100%"}}>

    </div>
    
    </>
  )
}

export default Demo5
/*

onClick={hello}                     let hello = ()=>{
                                    }

onClick={()=>hello(val, val)}       let hello = (a, b)=>{
                                    }

onClick={(e)=>hello(e)}              let hello = (a)=>{
                                    }     
    
onClick={(e)=>hello(7, e)}          let hello = (a, b)=>{
                                    }                                    



*/