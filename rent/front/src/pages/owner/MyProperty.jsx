import React, { useEffect, useState } from 'react'
import OwnerSideBar from '../../components/OwnerSideBar'
import axios from 'axios'
import { NavLink } from 'react-router-dom';

const MyProperty = () => {
    let [allProp, setAllProp] = useState([]);

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/property/owner`, {
            headers : {Authorization : localStorage.getItem("owner-access-token")}
        }).then(response=>{
            // console.log(response.data);
            setAllProp(response.data);
        })
    },[])

  return (
    <div className="container my-4" style={{minHeight : "750px", paddingTop : "120px"}}>
      <div className='row'>
       <OwnerSideBar />
        <div className="col-md-9">
          <h4>My Properties</h4>
          {
            allProp.length==0
            ?
            <div className='alert alert-danger'>No Data Found</div>
            :
            <table className='table table-bordered table-hover table-secondary'>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Title</th>
                <th>Rent</th>
                <th>Type</th>
                <th>Messages</th>
              </tr>
            </thead>
            <tbody>
                {
                    allProp.map((item, index)=><tr>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td>{item.rent}</td>
                        <td>{item.property_type}</td>
                        <td><NavLink to={`/owner/messages/${item._id}`} className='btn btn-sm btn-info'>Messsage</NavLink></td>
                    </tr>)
                }
            </tbody>

          </table>
          }
        </div>
      </div>
    </div>
  )
}

export default MyProperty