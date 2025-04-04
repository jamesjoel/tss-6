import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Details = () => {
    let param = useParams();
    let [property, setProperty] = useState({});
    let id = param.id;
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/property/find/${id}`)
        .then(response=>{
            console.log(response.data[0])
            setProperty(response.data[0])
        })
    },[])
  return (
    <div className="container my-5" style={{top : "100px", position : "relative", minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-8">
                <div className='card m-1 p-3'>
                   <h3>{property.title}</h3>
                   <h5>&#8377; {property.rent ? property.rent.toFixed(2) : ''}</h5>
                   <p><i class="fa fa-map-marker" aria-hidden="true"></i> {property.address}</p>

                   <div className='row'>
                    <div className='col-md-5'>
                        <img src='/assets/images/img_7.jpg' className='img-thumbnail'/>
                    </div>
                    <div className='col-md-7'>
                        <div className='px-2 py-3 bg-dark'>
                            <p className='m-0 p-0 text-light'><i class="fa fa-bed" aria-hidden="true"></i> Beds | <i class="fa fa-bath" aria-hidden="true"></i> Washroom | <i class="fa fa-caret-square-o-up" aria-hidden="true"></i> Furniture | <i class="fa fa-wifi" aria-hidden="true"></i> Wifi</p>
                        </div>

                        <div className='row mt-4'>
                            <div className="col-md-4">
                                <p className='m-0 p-0'>Property Type</p>
                                <p className='m-0 p-0 fw-bold'>{property.property_type}</p>
                            </div>
                            

                            
                        </div>
                       
                    </div>
                   </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className='card m-1 p-3'>
                    <h3>Owner Contact</h3>
                    <p><b>Owner Name</b> {property.owner_id ? property.owner_id.name : ''}</p>
                    <p><b>Owner Contact</b> +{property.owner_id ? property.owner_id.contact : ''}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details