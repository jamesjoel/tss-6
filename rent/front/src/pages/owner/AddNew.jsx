import React, {useRef} from 'react'
import OwnerSideBar from '../../components/OwnerSideBar'
import {useFormik} from 'formik'
import PropertySchema from '../../schema/PropertySchema'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddNew = () => {
  let myFile = useRef();
  let navigate = useNavigate();
  let propFrm = useFormik({
    validationSchema : PropertySchema,
    initialValues : {
      title : "",
      address : "",
      property_type : "",
      rent : "",
      deposite : "",
      amenity : "",
      image : "",
      advance_money : ""
    },
    onSubmit : (formData)=>{
      let file = myFile.current.files[0];
      let myform = new FormData();
      myform.append("photo", file);
      myform.append("title", formData.title);
      myform.append("address", formData.address);
      myform.append("property_type", formData.property_type);
      myform.append("rent", formData.rent);
      myform.append("deposite", formData.deposite);
      myform.append("amenity", formData.amenity);
      myform.append("advance_money", formData.advance_money);


      axios.post(`${import.meta.env.VITE_API_URL}/property`, myform, {
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
              <label>Property Image</label>
              <input name='image' ref={myFile} onChange={propFrm.handleChange} type='file' className={'form-control ' + (propFrm.errors.image && propFrm.touched.image ? 'is-invalid' : '')} />
              </div>
              <div className="my-4">
              <label>Property Address</label>
              <textarea name='address' onChange={propFrm.handleChange} placeholder='Address' className={'form-control ' + (propFrm.errors.address && propFrm.touched.address ? 'is-invalid' : '')} ></textarea>
              </div>
              <div className="my-4">
              <label>Property Type</label>
              <select name='property_type' onChange={propFrm.handleChange} className={'form-control ' + (propFrm.errors.property_type && propFrm.touched.property_type ? 'is-invalid' : '')} >
                <option value="">Select</option>
                <option value="Appartment">Appartment</option>
                <option value="Flat">Flat</option>
                <option value="Row House (1 BHK)">Row House (1 BHK)</option>
                <option value="Row House (2 BHK)">Row House (2 BHK)</option>
                <option value="Hostel">Hostel</option>
                <option value="Studio Appartment">Studio Appartment</option>
                
              </select>
              </div>
              <div className="my-4">
              <label>Rent</label>
              <input name='rent' onChange={propFrm.handleChange} type='text' placeholder='Rent' className={'form-control ' +(propFrm.errors.rent && propFrm.touched.rent ? 'is-invalid' : '')} />
              
              </div>
              <div className="my-4">
              <label>Security Deopsite</label>
              <input name='deposite' onChange={propFrm.handleChange} type='text' placeholder='Deopsite' className='form-control' />
              
              </div>
              <div className="my-4">
              <label>Advance Money</label>
              <input name='advance_money' onChange={propFrm.handleChange} type='text' placeholder='Advance Money' className={'form-control ' +(propFrm.errors.advance_money && propFrm.touched.advance_money ? 'is-invalid' : '')} />
              
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