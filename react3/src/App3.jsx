import React, { useCallback } from 'react'
import Box2 from './Box2'
import { useState } from 'react'

const App3 = () => {
    let [a, setA] =useState(0);
    let [name, setName] = useState("rohit")

    let demo = ()=>{
        setA(a+1);
    }

    let hello = useCallback(()=>{
        console.log("*******")
    },[]);

  return (
    <>
    <button onClick={demo}>OK</button>
    <h1>My Page</h1>
    <h1>{a}</h1>
    <Box2 hello={hello} name={name}/>
    </>
  )
}

export default App3