import React, {useState} from 'react'

const Home = () => {

  // let arr = useState("rohit");
  
  // let a = arr[0]
  // let b = arr[1]

  let [a, setA] = useState("Indore");

  let demo = ()=>{
    setA("Gaurav")
  }

  return (
    <>
    <h1>{a}</h1>
    <div>Home</div>
    <button className='btn btn-success' onClick={demo}>OK</button>
    </>
  )
}

export default Home

/*
  

*/