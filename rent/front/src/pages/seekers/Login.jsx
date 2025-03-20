import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import LoginSchema from '../../schema/LoginSchema';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  let navigate = useNavigate();
  let [errMsg, setErrMsg] = useState("");

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  let loginFrm = useFormik({
    validationSchema : LoginSchema,
    initialValues : {
      email : "",
      password : ""
    },
    onSubmit : (formData)=>{
      axios.post(`${import.meta.env.VITE_API_URL}/seekerauth`, formData)
      .then(response=>{
        // console.log(response.data)
        if(response.data.success==true){
          localStorage.setItem("name", response.data.name);
          localStorage.setItem("access-token", response.data.token);
          navigate("/");
        }else{
          if(response.data.errType==1){
            setErrMsg("This Email ID and Password is Incorrect !");
          }
          if(response.data.errType==2){
            
            setErrMsg("This Password is Incorrect !");
          }
        }
      })
    }
  })


  return (
    <div className="container" style={{minHeight : "700px"}}>
      <form onSubmit={loginFrm.handleSubmit}>
      <div className="row">
        <div className="col-md-6 offset-md-3 my-5">
          <div className="card">
            <div className="card-header bg-green">
              <h4 className='text-light'>Login</h4>
            </div>
            <div className="card-body">
            
              <div className="row">
                
                <div className="col-12 mb-3">
                  <input
                    type="text"
                    className={"form-control " + (loginFrm.errors.email && loginFrm.touched.email ? 'is-invalid' : '')}
                    placeholder="Email/Username"
                    name='email'
                    onChange={loginFrm.handleChange}
                  />
                </div>

                <div className="col-12 mb-3">
                  <input
                    type="password"
                    className={"form-control " + (loginFrm.errors.password && loginFrm.touched.password ? 'is-invalid' : '')}
                    placeholder="Password"
                    name='password'
                    onChange={loginFrm.handleChange}
                  />
                </div>
                <p className='text-danger text-center'>{errMsg}</p>
                
                
              </div>
            
            </div>
            <div className="card-footer">
            <div className="col-12">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary"
                  />
                </div>
                
            </div>
          </div>
        </div>
      </div>
      </form>
    </div>
  )
}

export default Login

/*
  import 
      1. hook             ---   useName ----    Logic -- useName()
      2. component        ---   DemoCompoent  -- JSX --- <DemoComponent />
      3. function/var     --- 

*/