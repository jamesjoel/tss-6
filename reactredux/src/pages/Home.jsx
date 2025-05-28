import React from 'react'
import Container from 'react-bootstrap/Container';
import {useSelector} from 'react-redux'

const Home = () => {
  
  let cityArr = useSelector(state=>state.CityReducer);

  return (
    <Container className='my-4'>
        <h1>Home Page</h1>
        {
          cityArr.map(item=><h3>{item}</h3>)
        }
    </Container>
  )
}

export default Home