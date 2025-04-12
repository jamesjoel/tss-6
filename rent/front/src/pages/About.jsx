import React from 'react'
import Box from '../components/Box'

const About = () => {
  let name = "vijay";
  let contact = 333444;
  let add = "freegunj, ujjain";


  return (
    <div className="container my-5" style={{top : "100px", position : "relative", minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-8">
                <h1>About Page</h1>
                <Box n={name} c={contact} a={add} />
            </div>
        </div>
    </div>
  )
}

export default About