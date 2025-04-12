import React, { useState } from 'react'

const InputeValue = ({setUsers}) => {

    let [name, setName] = useState("");

    let add = ()=>{
        setUsers((x)=>{
            return [...x, name];
        })
    }

  return (
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="row">
                <div className="col-md-8">
                    
                    <input type='text' onChange={(e)=>setName(e.target.value)} className='form-control' />
                </div>
                <div className="col-md-4">
                    <button onClick={add} className='btn btn-success'>Add</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InputeValue