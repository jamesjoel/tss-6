import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
const Home = () => {
    let navigate = useNavigate();
    let [name, setName] = useState("")
    let gotToChatRoom = ()=>{
        axios.post("http://localhost:3000/api/v1/user", {name:name})
        .then(response=>{
            console.log(response.data);
            navigate("/chat/"+response.data._id)
        })
    }


  return (

    <div className="container mt-4">
        <div className="row">
            <div className="col-md-6 offset-md-3 mt-4">
                <h4>Insert Your Name For Going to Chat Room</h4>
                <br />
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} className='form-control' placeholder='Your Full Name' />
                <br />
                <br />
                <button onClick={gotToChatRoom} className='btn btn-info'>Go To Chat Room</button>
            </div>  
        </div>
    </div>
  )
}

export default Home