import React from 'react'
import { useDispatch } from 'react-redux'
import { removeAll } from '../redux/StudentSlice'

const Footer = () => {
    let disp = useDispatch();
  return (
    <div className="container-fluid bg-dark p-3">
        <h3 className='text-light text-center'>Footer</h3>
        <button onClick={()=>disp(removeAll())} className='btn btn-danger'>Delete All</button>
    </div>
  )
}

export default Footer