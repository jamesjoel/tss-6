import React, {useState} from 'react'

const Help = () => {
  let a = false;
  let [name, setName] = useState("");

  let demo = ()=>{
    // setName(value);
    setName(()=> a==true ? "rohit" : "vijay")
  }
  return (
    <>
    <h1>{name}</h1>
    <button onClick={demo}>OK</button>
    <div>Help</div>
    </>
  )
}

export default Help