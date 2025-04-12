import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import Slider from '../components/Slider'
import Box from '../components/Box'
import PropertyProp from '../components/PropertyProp'

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
                      <PropertyProp item={item} index={index}/>
                    )
                  })
                }
                
                

               
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <Box n={"Reenu"} c={1245778} a={"Annapurna, Indore"} salary={50000} borderColor="blue" /> */}
    </>
  )
}

export default Home