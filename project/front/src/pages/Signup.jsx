import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { API_URL } from '../constants/API_URL';
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  let navigate = useNavigate();

  // let [allData, setAllData] = useState([]);
  // let [allCity, setAllCity] = useState([]);
  let [allDep, setAllDep] = useState([]);

  useEffect(()=>{
    axios.get(`${API_URL}/department`)
    .then(response=>{
      // console.log(response.data);
      setAllDep(response.data);
    })

  },[])

  // useEffect(()=>{

  //   axios.get(`${API_URL}/city/state`).then(response=>{
  //     //console.log(response.data)
  //     setAllData(response.data)
  //   })

  // },[])


  // let getCity = (event)=>{
  //   // console.log(event.target.value)
  //   let x = event.target.value;
  //   // axios.get("http://localhost:3000/api/v1/city/citybystate/"+x)
  //   axios.get(`${API_URL}/city/citybystate/${x}`)
  //   .then(response=>{
  //     // console.log(response.data);
  //     setAllCity(response.data);
  //   })

    // }
    let signupFrm = useFormik({
      initialValues : {
        name : "",
        email : "",
        password : "",
        studentId : "",
        department : "",
       
        gender : "",
        address : "",
        repassword : ""
      },
      onSubmit : (formData)=>{
        axios
        .post(`${API_URL}/student`, formData)
        .then(response=>{
          navigate("/login");
        })
      }
    })

  return (
    <div className="container" style={{minHeight : "600px"}}>
        <form onSubmit={signupFrm.handleSubmit}>
        <div className="row">
          <div className="col-md-6 offset-md-3 my-5">
            <div className="card border border-blue">
              <div className="card-header bg-blue">
                <h3 className='text-light text-center'>Student Register</h3>
              </div>
              <div className="card-body">
                <div className='my-2'>
                  <label>Full Name</label>
                  <input name='name' onChange={signupFrm.handleChange} type='text' className='form-control' />
                </div>
                <div className='my-2'>
                  <label>Username/Email</label>
                  <input name='email' onChange={signupFrm.handleChange}  type='text' className='form-control' />
                </div>
                <div className='my-2'>
                  <label>Password</label>
                  <input name='password' onChange={signupFrm.handleChange} type='password' className='form-control' />
                </div>
                <div className='my-2'>
                  <label>Re-Password</label>
                  <input name='repassword' onChange={signupFrm.handleChange} type='password' className='form-control' />
                </div>
                <div className='my-2'>
                  <label>Student ID</label>
                  <input name='studentId' onChange={signupFrm.handleChange} type='text' className='form-control' />
                </div>
                <div className='my-2'>
                  <label>Department</label>
                  <select name='department' onChange={signupFrm.handleChange} className='form-control'>
                    <option>Select</option>
                    {
                      allDep.map(item=><option>{item.name}</option>)
                    }
                  </select>
                </div>
                
                <div className='my-2'>
                  <label>Gender</label><br />
                  Male <input type='radio' name='gender' value="male" onChange={signupFrm.handleChange} />
                  &nbsp;&nbsp;&nbsp;
                  Female <input type='radio' name='gender' value="female"  onChange={signupFrm.handleChange} />
                </div>
                <div className='my-2'>
                  <label>Address</label>
                  <textarea name='address' onChange={signupFrm.handleChange} className='form-control'></textarea>
                </div>
              </div>
              <div className="card-footer bg-blue">
                <button type='submit' className='btn btn-light'>Register</button>
              </div>
            </div>
          </div>
        </div>
        </form>
    </div>
  )
}

export default Signup