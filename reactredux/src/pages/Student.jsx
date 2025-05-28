import React from 'react'
import Container from 'react-bootstrap/Container';
import {useSelector} from 'react-redux'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const Student = () => {
  
  let arr = useSelector(state=>state.StudentReducer);

  return (
    <Container className='my-4'>
        <h1>Student Page</h1>
        <Button  variant="primary">Add</Button>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          
        </tr>
      </thead>
      <tbody>
        {
          arr.map((item, index)=><tr>
          <td>{index+1}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          
        </tr>)
        }
        
        
      </tbody>
    </Table>
    </Container>
  )
}

export default Student