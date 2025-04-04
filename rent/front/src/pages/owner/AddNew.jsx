import React from 'react'
import OwnerSideBar from '../../components/OwnerSideBar'
import {useFormik} from 'formik'
import PropertySchema from '../../schema/PropertySchema'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddNew = () => {
  let navigate = useNavigate();
  let propFrm = useFormik({
    validationSchema : PropertySchema,
    initialValues : {
      title : "",
      address : "",
      property_type : "",
      rent : "",
      deposite : "",
      amenity : ""
    },
    onSubmit : (formData)=>{
      axios.post(`${import.meta.env.VITE_API_URL}/property`, formData, {
        headers : {Authorization : localStorage.getItem("owner-access-token")}
      })
      .then(response=>{
        // console.log(response.data)
        navigate("/owner/my-property");
      })
    }
  })


  return (
    <div className="container my-4" style={{minHeight : "750px", paddingTop : "120px"}}>
       <form onSubmit={propFrm.handleSubmit}>
      <div className='row'>
       <OwnerSideBar />
        <div className="col-md-9">
          <h4>Add New Property</h4>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="my-4">
              <label>Title</label>
              <input name='title' onChange={propFrm.handleChange} type='text' placeholder='Title' className={'form-control ' + (propFrm.errors.title && propFrm.touched.title ? 'is-invalid' : '')} />
              </div>
              <div className="my-4">
              <label>Property Address</label>
              <textarea name='address' onChange={propFrm.handleChange} placeholder='Address' className='form-control' ></textarea>
              </div>
              <div className="my-4">
              <label>Property Type</label>
              <select name='property_type' onChange={propFrm.handleChange} className='form-control' >
                <option>Select</option>
                <option>Appartment</option>
                <option>Flat</option>
                <option>Row House (1 BHK)</option>
                <option>Row House (2 BHK)</option>
                <option>Hostel</option>
                <option>Studio Appartment</option>
                
              </select>
              </div>
              <div className="my-4">
              <label>Rent</label>
              <input name='rent' onChange={propFrm.handleChange} type='text' placeholder='Rent' className='form-control' />
              
              </div>
              <div className="my-4">
              <label>Security Deopsite</label>
              <input name='deposite' onChange={propFrm.handleChange} type='text' placeholder='Rent' className='form-control' />
              
              </div>
              <div className="my-4">
              <label>Amenities</label><br />
              Parking <input value='Parking' type='checkbox' name='amenity' onChange={propFrm.handleChange} />
              &nbsp;&nbsp;WiFi <input value="WiFi" type='checkbox' name='amenity' onChange={propFrm.handleChange} />
              &nbsp;&nbsp;Electricity <input value="Electricity" type='checkbox' name='amenity' onChange={propFrm.handleChange} />
              &nbsp;&nbsp;Water <input value="Water" type='checkbox' name='amenity' onChange={propFrm.handleChange}/>
              &nbsp;&nbsp;Full Furnished <input value="Full Furnished" type='checkbox' name='amenity' onChange={propFrm.handleChange} />
              &nbsp;&nbsp;Semi Furnished <input value="Semi Furnished" type='checkbox' name='amenity' onChange={propFrm.handleChange}/>
                
              </div>
              <br />
              <div className='d-grid'>
              <button type='submit' className='btn btn-success'>Add</button>

              </div>
            </div>
          </div>
        </div>
    </div>
        </form>
</div>
  )
}

export default AddNew