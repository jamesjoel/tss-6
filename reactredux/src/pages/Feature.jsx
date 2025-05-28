import React from 'react'
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
const Feature = () => {
  let x = useSelector(state=>state.CityReducer);
  return (
    <Container className='my-4'>
        <h1>Feature Page</h1>
        {
          x.map(item=><h4>{item}</h4>)
        }
    </Container>
  )
}

export default Feature