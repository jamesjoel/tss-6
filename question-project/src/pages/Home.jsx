import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addData } from '../redux/SortedQueSlice';

const Home = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let arr = [];
  let go = ()=>{
    for(let i=1; i<=10; i++){

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
  return (
    <>
    <div className='row'>
        <div className='col-md-12'>
            <h3 className='text-center'>Start Your Quiz</h3>
            <br />
            <br />
            <button onClick={go}  className='btn btn-primary'>Start</button>
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