import React, { useState } from 'react'
import axios from 'axios'

const About = () => {

  let [allStu, setAllStu] = useState([]);
  let [showSpinner, setShowSpinner] = useState(false);

  let getData = ()=>{
    setShowSpinner(true);
    axios.get("http://localhost:3000/api/v1/student").then((response)=>{
      setShowSpinner(false);
      
      setAllStu(response.data);
    })

  }



  return (
    <div className='container' style={{minHeight : "650px"}}>
      <h1>About Page</h1>
      <button className='btn btn-info' onClick={getData}>OK { showSpinner==true ? <span className='spinner-border spinner-border-sm'></span> : '' } </button>
      {
        allStu.length == 0
        ?
        <div className='alert alert-info mt-4'>
          No Data Found
        </div>
        :
        <table className='mt-4 table table-dark table-hover table-brodered table-striped'>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>First Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Fee</th>
          </tr>
        </thead>
        <tbody>
          {
            allStu.map((item, index)=>{
              return(
                <tr>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.city}</td>
                  <td>{item.fee}</td>
                  
                </tr>
              )
            })
          }
        </tbody>
      </table>
      }
      
      
    </div>
  )
}

export default About
/*
  Component 
    Login (JS)

    JSX 
      1. all html should be small
      2. component should be Pascle-Case
      3. all tag/element/component should be close 
      4. html comment not allowd --- `{/*   
      5. Array.map((item, index)=>{
          return(
          )
        })
      6. Ternarry Ope
          {
              condition
              ?
              JSX
              :
              JSX
          }

      

    DOM Events
      Action/Actvicity --- Web Page

      <tag event={fn}>
      <tag event={()=>fn(para)}>
      <tag event={(e)=>fn(e)}>

    State
      A state is a React Varibale(object), which can store Component Memeory, and when we change/update it refresh/re-render the JSX

      let [num, setNum] = useState(inivalue)

      a. setNum(value)
      b. setNum(()=>{
        
          return value;
        })
      c. setNum((curr_value_of_num)=>{
        
          return value;
        })


      axios is just a module/pluging/lib for used getting/sending data into API.


*/