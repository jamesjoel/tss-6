import React, { useState } from 'react'

const Demo6 = () => {

    let [l, setL] = useState(0)
    let [t, setT] = useState(0)

    let handleMouseMove = ()=>{
        let a = Math.random()*500;
        let b = Math.floor(a); // 0-500

        let x = Math.random()*800;
        let y = Math.floor(x); // 0-800

        setT(b)
        setL(y)
        
    }


  return (
    <div onMouseMove={handleMouseMove} style={{marginLeft : l+"px", marginTop : t+"px", height : "100px", borderRadius : "50px", width : "100px", backgroundColor : "#000"}}></div>
  )
}

export default Demo6
/*
JS 
    Math.random() --- 0.65487654687654687
    Math.floor()-----27.58 --- 27   

    

*/