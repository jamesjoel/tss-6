import React, { useState } from 'react'
import { addStu } from '../redux/StudentSlice'
import { useDispatch } from 'react-redux'
const Home = () => {
  let disp = useDispatch();

  let [newStu, setNewStu] = useState({
    name : "",
    age : "",
    id : ""
  })


  let save = ()=>{
    console.log(newStu)
    /*
    addStu(newStu)
    */
   disp(addStu(newStu))
   setNewStu({name : "", age : ""})
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h3>Add New Student</h3>
          <label>Name</label>
          <input value={newStu.name} onChange={(e)=>setNewStu({...newStu, name : e.target.value})} type='text' className='form-control' />
          <br />
          <br />
          <label>Age</label>
          <input value={newStu.age} onChange={(e)=>setNewStu({...newStu, age : e.target.value})} type='text' className='form-control' />
          <br />
          <br />
          <button onClick={save} className='btn btn-primary'>Add</button>
        </div>
      </div>
    </div>
  )
}

export default Home