import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { API_URL } from '../constants/API_URL';
import {useFormik} from 'formik'
import { useNavigate } from 'react-router-dom'
import SignupSchema from '../schema/SignupSchema';





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
      validationSchema : SignupSchema,
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
                  <input name='name' onChange={signupFrm.handleChange} type='text' className={'form-control ' + (signupFrm.errors.name && signupFrm.touched.name ? 'is-invalid' : '')} />
                  {
                    signupFrm.errors.name && signupFrm.touched.name
                    ?
                    <small className='text-danger'>{signupFrm.errors.name}</small>
                    :
                    ''
                  }
                </div>
                <div className='my-2'>
                  <label>Username/Email</label>
                  <input name='email' onChange={signupFrm.handleChange}  type='text' className={'form-control ' + (signupFrm.errors.email && signupFrm.touched.email ? 'is-invalid' : '')} />
                  {
                    signupFrm.errors.email && signupFrm.touched.email
                    ?
                    <small className='text-danger'>{signupFrm.errors.email}</small>
                    :
                    ''
                  }
                </div>
                <div className='my-2'>
                  <label>Password</label>
                  <input name='password' onChange={signupFrm.handleChange} type='password' className={'form-control ' + (signupFrm.errors.password && signupFrm.touched.password ? 'is-invalid' : '')} />
                  {
                    signupFrm.errors.password && signupFrm.touched.password
                    ?
                    <small className='text-danger'>{signupFrm.errors.password}</small>
                    :
                    ''
                  }
                </div>
                <div className='my-2'>
                  <label>Re-Password</label>
                  <input name='repassword' onChange={signupFrm.handleChange} type='password' className={'form-control ' + (signupFrm.errors.repassword && signupFrm.touched.repassword ? 'is-invalid' : '')} />
                  {
                    signupFrm.errors.repassword && signupFrm.touched.repassword
                    ?
                    <small className='text-danger'>{signupFrm.errors.repassword}</small>
                    :
                    ''
                  }
                </div>
                <div className='my-2'>
                  <label>Student ID</label>
                  <input name='studentId' onChange={signupFrm.handleChange} type='text' className={'form-control ' + (signupFrm.errors.studentId && signupFrm.touched.studentId ? 'is-invalid' : '')} />
                  {
                    signupFrm.errors.studentId && signupFrm.touched.studentId
                    ?
                    <small className='text-danger'>{signupFrm.errors.studentId}</small>
                    :
                    ''
                  }
                </div>
                <div className='my-2'>
                  <label>Department</label>
                  <select name='department' onChange={signupFrm.handleChange} className={'form-control ' + (signupFrm.errors.department && signupFrm.touched.department ? 'is-invalid' : '')}>
                    <option>Select</option>
                    {
                      allDep.map(item=><option>{item.name}</option>)
                    }
                  </select>
                  {
                    signupFrm.errors.department && signupFrm.touched.department
                    ?
                    <small className='text-danger'>{signupFrm.errors.department}</small>
                    :
                    ''
                  }
                </div>
                
                <div className='my-2'>
                  <label>Gender</label><br />
                  Male <input type='radio' name='gender' value="male" onChange={signupFrm.handleChange} />
                  &nbsp;&nbsp;&nbsp;
                  Female <input type='radio' name='gender' value="female"  onChange={signupFrm.handleChange} />
                  <br />
                  {
                    signupFrm.errors.gender && signupFrm.touched.gender
                    ?
                    <small className='text-danger'>{signupFrm.errors.gender}</small>
                    :
                    ''
                  }
                </div>
                <div className='my-2'>
                  <label>Address</label>
                  <textarea name='address' onChange={signupFrm.handleChange} className={'form-control ' + (signupFrm.errors.address && signupFrm.touched.address ? 'is-invalid' : '')}></textarea>
                  {
                    signupFrm.errors.address && signupFrm.touched.address
                    ?
                    <small className='text-danger'>{signupFrm.errors.address}</small>
                    :
                    ''
                  }
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