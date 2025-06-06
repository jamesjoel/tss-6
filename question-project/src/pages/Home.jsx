import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addData } from '../redux/SortedQueSlice';

const Home = () => {

  useEffect(()=>{
    setTimeout(()=>{
      test();
    }, 1000)
  },[])
  let [demo, setDemo] = useState(0)
  
  let [numQue, setNumQue] = useState(0); 

  let navigate = useNavigate();
  let dispatch = useDispatch();
  let arr = [];
  let go = ()=>{
    for(let i=1; i<=numQue; i++){

      let num = Math.random()*500;
      num = Math.floor(num);
      if(arr.indexOf(num)>=0)
      {
        num = Math.random()*500;
        num = Math.floor(num);
      }
      arr.push(num);
      
    }
    dispatch(addData(arr));
    navigate("/quiz")
    
  }

  let test = ()=>{
    setDemo(demo++);
    setTimeout(()=>{
      test();
    }, 1000)
  }
  return (
    <>
    <div className='row'>
        <div className='col-md-12'>
            <h3 className='text-center'>Start Your Quiz</h3>
            <br />
            <input type='text' value={numQue} onChange={(e)=>setNumQue(e.target.value)} />
            <br />
            <br />
            <button onClick={go}  className='btn btn-primary'>Start</button>
            <br />
            <br />
            {/* <input type='radio' checked={demo === "male"} onChange={(e)=>setDemo(e.target.value)} name='gender' value="male" />
            <input type='radio' checked={demo === "female"} onChange={(e)=>setDemo(e.target.value)} name='gender' value="female" />
            <button onClick={()=>setDemo(null)}>ok</button> */}

            <h1>{demo}</h1>
        </div>
    </div>
    </>
  )
}

export default Home

/*
  [4, 25, 1, 7, 3, 6, 9, 10, 12]

  arr.indexOf(11) ==== -1

*/