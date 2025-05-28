import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeStu, addStu, updateStu } from '../redux/StudentSlice';

const Student = () => {
  let [newStu, setNewStu] = useState({
    name : "",
    age : "",
    id : ""
  })
  let dispatch = useDispatch();
  let allStu = useSelector(state=>state.StudentReducer);

  let del = (obj)=>{
    dispatch(removeStu(obj.id))
  }

  let save = ()=>{
    if(newStu.id){
      dispatch(updateStu(newStu));
      setNewStu({name : "", age : "", id : ""})
    }else{

      dispatch(addStu(newStu));
      setNewStu({name : "", age : "", id : ""})
    }
  }
  return (
    <div className='container'>
      <h3>All Student</h3>
      <div className='row my-3'>
        <div className='col-md-5'>
          <input value={newStu.name} onChange={(e)=>setNewStu({...newStu, name : e.target.value})} type='text' placeholder='Name' className='form-control' />
        </div>
        <div className='col-md-5'>
          <input value={newStu.age} onChange={(e)=>setNewStu({...newStu, age : e.target.value})} type='text' placeholder='Age' className='form-control' />
        </div>
        <div className='col-md-2'>
          <button onClick={save} className='btn btn-primary'>{newStu.id ? 'Update' : 'Add'}</button>
        </div>

      </div>

      <table className='table table-dark table-bordered table-hover'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            allStu.map((item, index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td><button onClick={()=>setNewStu(item)} className='btn btn-info'>Edit</button></td>
                <td><button onClick={()=>del(item)} className='btn btn-danger'>Del</button></td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default Student