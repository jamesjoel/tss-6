import React, { useMemo, useState } from 'react'

const App2 = () => {
  let [a, setA] = useState(0)
  let [b, setB] = useState(0)

  let demo = useMemo(()=>{
    console.log("****")
    return a*10;
  },[a])



  return (
    <>
    <h1>{a}</h1>
    <h1>{b}</h1>
    <h2>{demo}</h2>
      <button onClick={()=>setA(a+1)}>OK</button>
      <button onClick={()=>setB(b+1)}>OK2</button>
    </>
  )
}

export default App2