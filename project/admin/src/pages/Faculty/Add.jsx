import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'

const Add = () => {

    let addFacultyFrm = useFormik({
        initialValues : {
            name : "",
            email : "",
            username : "",
            password : "",
            address : "",
            contact : "",
            repassword : ""
        },
        onSubmit : (formData)=>{
            axios.post("http://localhost:3000/api/v1/faculty", formData)
            .then(response=>{
                console.log(response.data);
            })
        }
    })

  return (
    <div className="col-sm-12 col-xl-12 col-md-12">
        <form onSubmit={addFacultyFrm.handleSubmit}>
        <div className="bg-secondary rounded h-100 p-4">
            <h6 className="mb-4">Add New Faculty</h6>
            <div className="form-floating mb-3">
                <input name='name' onChange={addFacultyFrm.handleChange} type="text" className="form-control" id="name"
                    placeholder="Full Name" />
                <label htmlFor="name">Full Name</label>
            </div>
            <div className="form-floating mb-3">
                <input name='email' onChange={addFacultyFrm.handleChange} type="text" className="form-control" id="floatingInput"
                    placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input name='contact' onChange={addFacultyFrm.handleChange} type="text" className="form-control" id="contact"
                    placeholder="Contact" />
                <label htmlFor="contact">Contact Number</label>
            </div>
            <div className="form-floating mb-3">
                <input name='username' onChange={addFacultyFrm.handleChange} type="text" className="form-control" id="username"
                    placeholder="Username" />
                <label htmlFor="username">Username</label>
            </div>
            <div className="form-floating mb-3">
                <input name='password' onChange={addFacultyFrm.handleChange} type="password" className="form-control" id="floatingPassword"
                    placeholder="Password" />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating mb-3">
                <input name='repassword' onChange={addFacultyFrm.handleChange} type="password" className="form-control" id="repass"
                    placeholder="Re-Password" />
                <label htmlFor="repass">Re-Password</label>
            </div>
            
            <div className="form-floating">
                <textarea name='address' onChange={addFacultyFrm.handleChange} className="form-control" placeholder="Leave a comment here"
                    id="floatingTextarea" style={{height: "100px"}}></textarea>
                <label htmlFor="floatingTextarea">Address</label>
            </div>
            <br />
            <button type='submit' className='btn btn-success'>Add</button>
        </div>
        </form>
    </div>
  )
}

export default Add