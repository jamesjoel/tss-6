import React from 'react'

const Demo4 = () => {

    let hello = (a)=>{
        console.log(a)
        
    }


  return (
    <>
    <div>Demo4</div>
    {/* <button onClick={hello}>OK</button> */}

    <button onClick={(e)=>hello(e)}>OK</button>
    </>
  )
}

export default Demo4