import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import Slider from '../components/Slider'

const Home = () => {
  
  let [allProp, setAllProp] = useState([])
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/property`)
    .then(response=>{
      setAllProp(response.data);
    })
  },[])

  return (
    <>
    <Slider />
    <div className="section">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="font-weight-bold text-primary heading">
              Popular Properties
            </h2>
          </div>
          <div className="col-lg-6 text-lg-end">
            <p>
              <a
                href="#"
                target="_blank"
                className="btn btn-primary text-white py-3 px-4"
                >View all properties</a
              >
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="property-slider-wrap">
              <div className="property-slider row">
                {
                  allProp.map((item, index)=>{
                    return(
                      <div className="property-item col-md-4">
                      <a href="property-single.html" className="img">
                        <img src="/assets/images/img_1.jpg" alt="Image" className="img-fluid" />
                      </a>
    
                      <div className="property-content">
                        <div className="price mb-2"><span>&#8377; {item.rent.toFixed(2)}</span></div>
                        <div>
                          <span className="d-block mb-2 text-black-50">{item.address}</span>
                          <span className="city d-block mb-3">{item.title}</span>
    
                          <div className="specs d-flex mb-4">
                            {
                              item.amenity.map(item2=>{
                                return(
                                  <span className="d-flex align-items-center me-3">
                                     {
                                      item2 == "Parking" 
                                      ?
                                      <i class="fa fa-car" aria-hidden="true"></i>
                                      
                                      :
                                      item2 == "WiFi"
                                      ?
                                      <i class="fa fa-wifi" aria-hidden="true"></i>
                                      :
                                      item2=="Electricity"
                                      ?
                                      <i class="fa fa-bolt" aria-hidden="true"></i>
                                      :
                                      item2=="Full Furnished"
                                      ?
                                      <i class="fa fa-bed" aria-hidden="true"></i>
                                      :
                                      item2=="Semi Furnished"
                                      ?
                                      <i class="fa fa-adjust" aria-hidden="true"></i>
                                      :
                                      ''

                                     } 
                                  &nbsp;<span className="caption">{item2}</span>
                                </span>
                                )
                              })
                            }
                            
                            
                          </div>
    
                          <NavLink
                            to="/details"
                            className="btn btn-primary py-2 px-3"
                            >See details</NavLink>
                        </div>
                      </div>
                    </div>
                    )
                  })
                }
                
                

               
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home