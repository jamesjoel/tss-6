import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveEmp } from '../redux/EmpSlice'

const Employee = () => {
    let disp = useDispatch();
    let [emp, setEmp] = useState({
        name : "",
        dep : "",
        salary : "",
    })

    let add = ()=>{
        disp(saveEmp(emp))
    }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h3>Add New Employee</h3>
                <label>Name</label>
                <input value={emp.name} onChange={(e)=>setEmp({...emp, name : e.target.value})} type='text' className='form-control' />
                <br />
                <label>Dep</label>
                <input  value={emp.dep} onChange={(e)=>setEmp({...emp, dep : e.target.value})} type='text' className='form-control' />
                <br />
                <label>Salary</label>
                <input  value={emp.salary} onChange={(e)=>setEmp({...emp, salary : e.target.value})} type='text' className='form-control' />
                <br />
                <br />
                <button onClick={add} className='btn btn-primary'>Add</button>
            </div>
        </div>
    </div>
  )
}

export default Employee