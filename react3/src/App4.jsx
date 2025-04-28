import React, { useState, useRef } from 'react'
import axios from 'axios'

const App4 = () => {
   let myfile = useRef();
   let upload = ()=>{
   
    let a = myfile.current.files[0];
    let myform = new FormData();
    myform.append("photo", a);
    axios.post("http://localhost:3000/api/v1/image", myform)
    .then(response=>{
        console.log(response.data);
    })
    
   }
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h3>File Upload in React</h3>
                <input ref={myfile} type='file' />
                <br />
                <br />
                <button onClick={upload}>OK</button>
            </div>
        </div>
    </div>
  )
}

export default App4

/*
<form method="post" type="/api/v1/employee/save">

<input type="text" />
<input type="text" />

<input type="submit" value="save" />
</form>



FormData

*/