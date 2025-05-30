import React from 'react'
import SeekerSignupSchema from '../../schema/SeekerSignupSchema'
import { useFormik } from 'formik'
import Slider from '../../components/Slider'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'


const Signup = () => {
  let navigate = useNavigate();
  
  let signupFrm = useFormik({
    validationSchema : SeekerSignupSchema,
    initialValues : {
      name : "",
      email : "",
      address : "",
      password : "",
      repass : "",
      contact : "",
      gender : ""
    },
    onSubmit : (formData)=>{
      // { name : "rohit", email : "" }
      axios.post(`${import.meta.env.VITE_API_URL}/seeker`, formData)
      .then(response=>{
        toast("Your Registration Successful....", {onClose : ()=>{

          navigate("/seeker/login")
        }});
      })
    }
  })
  
  return (
    <>
    <Slider />
    <div className="container" style={{minHeight : "700px"}}>
      <ToastContainer theme="dark" />
  
      <form onSubmit={signupFrm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3 my-5">
          <div className="card">
            <div className="card-header bg-green">
              <h4 className='text-light'>Signup for Property</h4>
            </div>
            <div className="card-body">
            
              <div className="row">
              <div className="col-12 mb-3">
                  <input type="text" name='name' onChange={signupFrm.handleChange}  className={"form-control " + (signupFrm.errors.name && signupFrm.touched.name ? 'is-invalid' : '')} placeholder="Name"/>
                  {
                    signupFrm.errors.name && signupFrm.touched.name
                    ?
                    <small className='text-danger'>{signupFrm.errors.name}</small>
                    :
                    ''
                  }
                </div>
                <div className="col-12 mb-3">
                  <input type="text" name='email' onChange={signupFrm.handleChange}  className={"form-control " + (signupFrm.errors.email && signupFrm.touched.email ? 'is-invalid' : '')} placeholder="Email/Username"/>
                  {
                    signupFrm.errors.email && signupFrm.touched.email
                    ?
                    <small className='text-danger'>{signupFrm.errors.email}</small>
                    :
                    ''
                  }
                </div>

                <div className="col-12 mb-3">
                  <input
                  name='password' onChange={signupFrm.handleChange}
                    type="password"
                    className={"form-control " + (signupFrm.errors.password && signupFrm.touched.password ? 'is-invalid' : '')}
                    placeholder="Password"
                  />
                  {
                    signupFrm.errors.password && signupFrm.touched.password
                    ?
                    <small className='text-danger'>{signupFrm.errors.password}</small>
                    :
                    ''
                  }
                </div>
                <div className="col-12 mb-3">
                  <input
                  name='repass' onChange={signupFrm.handleChange}
                    type="password"
                    className={"form-control " + (signupFrm.errors.repass && signupFrm.touched.repass ? 'is-invalid' : '')}
                    placeholder="Re-Password"
                  />
                  {
                    signupFrm.errors.repass && signupFrm.touched.repass
                    ?
                    <small className='text-danger'>{signupFrm.errors.repass}</small>
                    :
                    ''
                  }
                </div>
                <div className="col-12 mb-3">
                  <input name='contact' onChange={signupFrm.handleChange} type="text"  className={"form-control " + (signupFrm.errors.contact && signupFrm.touched.contact ? 'is-invalid' : '')} placeholder="Contact"/>
                  {
                    signupFrm.errors.contact && signupFrm.touched.contact
                    ?
                    <small className='text-danger'>{signupFrm.errors.contact}</small>
                    :
                    ''
                  }
                </div>
                <div className="col-12 mb-3">
                  <textarea name='address' onChange={signupFrm.handleChange}  className={"form-control " + (signupFrm.errors.address && signupFrm.touched.address ? 'is-invalid' : '')} placeholder="Address"></textarea>
                  {
                    signupFrm.errors.address && signupFrm.touched.address
                    ?
                    <small className='text-danger'>{signupFrm.errors.address}</small>
                    :
                    ''
                  }
                </div>
                <div className="col-12 mb-3">
                  Male : <input type='radio' onChange={signupFrm.handleChange} name='gender' value="male" />
                  Female : <input type='radio' onChange={signupFrm.handleChange} name='gender' value="female" />
                  Other : <input type='radio' onChange={signupFrm.handleChange} name='gender' value="other" />
                  <br />
                  {
                    signupFrm.errors.gender && signupFrm.touched.gender
                    ?
                    <small className='text-danger'>{signupFrm.errors.gender}</small>
                    :
                    ''
                  }
                </div>
                
                
              </div>
            
            </div>
            <div className="card-footer">
            <div className="col-12">
                  <input
                    type="submit"
                    value="Signup"
                    className="btn btn-primary"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
    </>
  )
}

export default Signup