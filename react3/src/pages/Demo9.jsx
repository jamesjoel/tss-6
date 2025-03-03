import React, { useState } from 'react'

const Demo9 = () => {
    let [arr, setArr] = useState(["rohit", "amar"]);

    let [name, setName] = useState("");

    let handleChange = (event)=>{
        // event.target.value
        setName(event.target.value);
    }

    let show = ()=>{
        setArr([...arr, name]);
        setName("");
    }

  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-12">
                Name
                 <input value={name} onChange={(e)=>handleChange(e)} type='text' />
                 <button onClick={show}>OK</button>
                 
                 <br />
                 {
                    arr.map((item)=>{
                        return(
                            <h1>{item}</h1>
                        )
                    })
                 }
            </div>
        </div>
    </div>
  )
}

export default Demo9