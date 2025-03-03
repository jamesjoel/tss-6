import React, { useState } from 'react'

const Demo3 = () => {
    let [arr, setArr] = useState(["indore"]);

    let demo = ()=>{
        // setArr(["indore", "indore"]);
        setArr([...arr, "indore"]);
    }

  return (
    <>
    <div>Demo3</div>
    <button onClick={demo}>OK</button>
    {
        arr.map((item)=>{
            return(
                <h1>{item}</h1>
            )
        })
    }
    </>
  )
}

export default Demo3