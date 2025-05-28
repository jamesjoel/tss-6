import React from 'react'
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import {addEmp} from '../redux/EmpSlice'
import { useFormik } from 'formik';


const Employee = () => {
    let dispatch = useDispatch();
    let empData = useSelector(state=>state.EmpReducer);

    let empFrm = useFormik({
      initialValues : {
        name : "",
        salary : "",
        dep : "",
      },
      onSubmit : (formData)=>{
        dispatch(addEmp(formData))
      }
    })

    

  return (
    <Container className='my-4'>
        <h1>Employee Page</h1>
        <form onSubmit={empFrm.handleSubmit}>

        <input type='text' placeholder='Name' name='name' onChange={empFrm.handleChange} />
        <input type='text' placeholder='Salary' name='salary' onChange={empFrm.handleChange}/>
        <input type='text' placeholder='Department' name='dep' onChange={empFrm.handleChange}/>

        <Button type='submit'>Add</Button>
        </form>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Salary</th>
          <th>Department</th>
          
        </tr>
      </thead>
      <tbody>
        {
            empData.map((item, index)=><tr>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.salary}</td>
                <td>{item.dep}</td>
            </tr>)
        }
      </tbody>
    </Table>
    </Container>
  )
}

export default Employee