import React, {useEffect, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'

const EditProfile = () => {

  let navigate = useNavigate()

    let [seeker, setSeeker] = useState({
        name : "",
      email : "",
      address : "",
      
      contact : "",
      gender : ""
    })

    

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/seekerprofile`, {
      headers : {Authorization : localStorage.getItem("access-token")}
    })
    .then(response=>{
      setSeeker(response.data[0]);
    })
  },[])

  let updateFrm = useFormik({
    enableReinitialize : true,
    initialValues : seeker,
    onSubmit : (formData)=>{

        axios.put(`${import.meta.env.VITE_API_URL}/seekerprofile`,formData, {
            headers : {Authorization : localStorage.getItem("access-token")}
        })
        .then(response=>{
            // console.log(response.data);
            navigate("/seeker/my-profile")
        })
    }
  })

  return (
    <div className="container my-4" style={{minHeight : "750px", paddingTop : "120px"}}>
      <div className='row'>
        <div className="col-md-3">
          <div className='alert alert-secondary'>
            <p className='m-0'>Hello</p>
            <h4>{ localStorage.getItem("name") }</h4>
          </div>
          <div className='alert alert-secondary'>
            <h6>My Account</h6>
            <ul className='nav flex-column'>
              
              <li className='nav-item'>
                <NavLink to='/' className='nav-link'>Enquiries  <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/seeker/my-profile' className='nav-link'>My Profile  <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/seeker/edit-profile' className='nav-link'>Edit Profile  <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/seeker/update-password' className='nav-link'>Update Password  <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/seeker/logout' className='nav-link'>Logout  <i class="fa fa-angle-right" aria-hidden="true"></i></NavLink>
              </li>
              
              
             
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <h4>Update Personal Information</h4>
          <form onSubmit={updateFrm.handleSubmit}>
            <div className="row">
                <div className="col-md-8 offset-md-2">
                <div className='my-2'>
                    <label>Full Name</label>
                        <input type='text' value={updateFrm.values.name} name='name' onChange={updateFrm.handleChange} className='form-control' />
                    </div>
                    <div className='my-2'>
                        <label>Email/Username</label>
                        <input type='text' value={updateFrm.values.email} name='email' onChange={updateFrm.handleChange} className='form-control' disabled />
                    </div>
                    <div className='my-2'>
                        <label>Contact</label>
                        <input type='text' value={updateFrm.values.contact} name='contact' onChange={updateFrm.handleChange} className='form-control' />
                    </div>
                    <div className='my-2'>
                        <label>Address</label>
                        <textarea name='address' value={updateFrm.values.address} onChange={updateFrm.handleChange} className='form-control' ></textarea>
                    </div>
                    <div className='my-2'>
                        <label>Gender</label><br />
                        Male <input type='radio' name='gender' value="male" checked={updateFrm.values.gender=="male"}  onChange={updateFrm.handleChange}/>
                        Female <input type='radio' name='gender' value="female" checked={updateFrm.values.gender=="female"} onChange={updateFrm.handleChange}/>
                        
                    </div>
                    <div className='my-4'>
                        <button type='submit' className='btn btn-primary'>Update</button>
                    </div>
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProfile

/*
Whenever you want to update data by useing Formik then
    1. in the formik "initialValues" define by a "State"
    2. add a new property ----  enableReinitialize : true
    3. add all input "value" props with "form.values.name"

*/