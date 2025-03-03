import React, { useState } from 'react'

const About = () => {
  let [num, updateNum] = useState(10);

  let demo1 = ()=>{
    updateNum(++num);
    
  }
  let demo2 = ()=>{
    updateNum(--num);
    
  }

  return (
    <>
    <h1>{num}</h1>
    <div>About</div>
    <button className='btn btn-info' onClick={demo1}>+</button>
    <button className='btn btn-info' onClick={demo2}>-</button>
    </>
  )
}

export default About

/*

  let [var, setVar] = useState(10)

  setVar(20);

  setVar(()=>{


    return value;
  })

  setVar((a)=>{


    return value;
  })


*/