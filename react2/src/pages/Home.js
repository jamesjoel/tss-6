import React from 'react'

const Home = () => {

  // JS
  let a = 10;
  let b = "rohit";

  let demo1 = ()=>{
    console.log("***************")
  }
  let demo2 = ()=>{
    console.log("############")
  }


  return (
    // JSX
    <>
    <div>Home</div>
    <h1>{a}</h1>
    <h2>{b}</h2>
    <button onkey onClick={demo1} onDoubleClick={demo2}>OK</button>
    
    {/*    EVENT */}
    </>
  )
}

export default Home