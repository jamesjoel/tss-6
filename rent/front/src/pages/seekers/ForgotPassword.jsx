import React, { useState } from 'react'
import Slider from '../../components/Slider'
import { useFormik } from 'formik'
import axios from 'axios'


const ForgotPassword = () => {

    let [errMsg, setErrMsg] = useState("");
    let forgotFrm = useFormik({
        initialValues : {
            username : ""
        },
        onSubmit : (formData)=>{
            axios.post(`${import.meta.env.VITE_API_URL}/seekerprofile/getotp`, formData)
            .then(response=>{
                if(response.data.success==true){

                }else{
                    setErrMsg("This Username/Email does not exists !");
                }
            })
        }
    })

  return (
    <>
    <Slider />
    <div className="container" style={{minHeight : "700px"}}>
        <form onSubmit={forgotFrm.handleSubmit}>
        <div className='row'>
            <div className="col-md-6 offset-md-3 my-4">
            <div className="card">
            <div className="card-header bg-green">
              <h4 className='text-light'>Forgot Password</h4>
              
            </div>
            <div className="card-body">
                <div className="my-3">
                    <label>Username/Email</label>
                    <input name='username' onChange={forgotFrm.handleChange} type='text' className='form-control' />
                    <small className='text-danger'>{errMsg}</small>
                </div>
            </div>
            <div className="card-footer">
                <button type='submit' className='btn btn-primary'>Get OTP</button>
            </div>
            </div>
            </div>
        </div>
        </form>
    </div>
    </>
  )
}

export default ForgotPassword