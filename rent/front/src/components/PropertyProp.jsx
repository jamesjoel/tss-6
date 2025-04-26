import React from 'react'
import { NavLink } from 'react-router-dom'

const PropertyProp = ({item, index}) => {
  console.log(item.amenity)
    // let color = index%2==0 ? 'red' : 'blue';
  return (
    <div className="property-item col-md-4" >
        <div style={{margin : "2px"}}>
        
                        <img src={`http://localhost:3000/upload_images/${item.image}`} alt="Image"  style={{width : "100%", height : "250px"}} />
        
    
                      <div className="property-content">
                        <div className="price mb-2"><span>&#8377; {item.rent.toFixed(2)}</span></div>
                        <div>
                          <span className="d-block mb-2 text-black-50">{item.address}</span>
                          <span className="city d-block mb-3">{item.title}</span>
    
                          <div className="specs d-flex mb-4">
                            <div className='row'>
                              <div className='col-md-12'>
                            {
                              
                              item.amenity.map(item2=>{
                                return(
                                  <span className="amenity-text me-3">
                                     {
                                      item2 == "Parking" ? <i class="fa fa-car" aria-hidden="true"></i> : ''
                                     }
                                     {
                                      item2 == "WiFi" ? <i class="fa fa-wifi" aria-hidden="true"></i> : ''
                                     }
                                     {
                                      item2=="Electricity" ? <i class="fa fa-bolt" aria-hidden="true"></i>: ''
                                     }
                                     {
                                      item2=="Full Furnished" ? <i class="fa fa-bed" aria-hidden="true"></i> : ''
                                     }
                                     {
                                      item2=="Semi Furnished" ? <i class="fa fa-adjust" aria-hidden="true"></i> : ''
                                     }
                                     {
                                      item2=="Water" ? <i class="fa fa-tint" aria-hidden="true"></i> : ''
                                     }
                                       
                                  &nbsp;<span className="">{item2}</span>
                                </span>
                                )
                              })
                            }
                            </div>
                            </div>
                            
                          </div>
    
                          <NavLink
                            to={"/details/"+item._id}
                            className="btn btn-primary py-2 px-3"
                            >See details</NavLink>
                        </div>
                      </div>
        </div>                  
    </div>
  )
}

export default PropertyProp