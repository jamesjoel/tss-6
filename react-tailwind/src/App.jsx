import React from 'react'
import {useFormik} from 'formik'

const App = () => {

    let myFrm = useFormik({
        initialValues : {
            fname : "",
            lname : "",
            email : "",
            password : "",
            contact : ""
        },
        onSubmit : (formData)=>{
            console.log(formData)
        }
    })


  return (
    <>
        <form onSubmit={myFrm.handleSubmit}>
        <div className="flex justify-center items-center w-full  min-h-screen bg-white px-5 py-5">
      <div className="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-between items-stretch px-5 xl:px-5 py-5">
        <div className="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0">
          <h1 className="text-center text-2xl sm:text-3xl font-semibold text-[#4A07DA]">
            Create Account
          </h1>
          <div className="w-full mt-5 sm:mt-8">
            <div className="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  name="fname"
                  onChange={myFrm.handleChange}  
                  type="text"
                  placeholder="Enter Your First Name"
                  className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                />
                <input
                name="lname"
                onChange={myFrm.handleChange}  
                  type="text"
                  placeholder="Enter Your Last Name"
                  className="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                />
              </div>
              <input
              name="email"
              onChange={myFrm.handleChange}  
                type="text"
                placeholder="Enter Your Email"
                className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
              />
              <input
              name="contact"
              onChange={myFrm.handleChange}  
                type="text"
                placeholder="Enter Your Phone No"
                className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
              />
              <input
              name="password"
              onChange={myFrm.handleChange}  
                type="Password"
                placeholder="Enter Your Password"
                className="input input-bordered input-primary w-full text-black placeholder:text-black/70"
              />
              <div className="flex items-center gap-1.5  justify-start pl-2">
                
                
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                <button type='submit' className="btn btn-active btn-primary btn-block max-w-[200px]">
                  Sign Up
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </form>
    </>
  )
}

export default App