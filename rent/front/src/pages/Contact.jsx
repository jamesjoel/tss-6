import React from 'react'
import Box from '../components/Box'

const Contact = () => {
  let user1 = {
    name : "aman",
    contact : "000123",
    address : "M. G. Road, Indore"
  }

  let user2 = {
    name : "jaya",
    contact : "888777",
    address : "A. B., Bhopal"
  }

  return (
    <div className="container my-5" style={{top : "100px", position : "relative", minHeight : "700px"}}>
    <div className="row">
        <div className="col-md-8">
            <h1>Contact Page</h1>
            <Box n={user1.name} c={user1.contact} a={user1.address} />
            <Box n={user2.name} c={user2.contact} a={user2.address}/>
        </div>
    </div>
</div>
  )
}

export default Contact