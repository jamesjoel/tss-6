import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OwnerSideBar from '../../components/OwnerSideBar'

const MyAccount = () => {
  let [owner, setOwner] = useState({})
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/ownerprofile`, 
      { 
        headers : { 
                    Authorization : localStorage.getItem("owner-access-token") 
                  }
      }
      )
    .then(response=>{
      // console.log(response.data);
      setOwner(response.data[0])
    })
  },[])


  return (
    <div className="container my-4" style={{minHeight : "750px", paddingTop : "120px"}}>
      <div className='row'>
       <OwnerSideBar />
        <div className="col-md-9">
          <h4>My Personal Information</h4>
          <table className='table table-bordered table-hover table-secondary'>
            <tbody>
              <tr>
                <td>Full Name</td>
                <td>{owner.name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{owner.email}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>{owner.address}</td>
              </tr>
              <tr>
                <td>Contact</td>
                <td>{owner.contact}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MyAccount
/*
  make sure pls send token in headers.Authorization
  http://localhost:3000/api/v1/userprofile
*/