import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {API_URL} from '../constants/API_URL'

const Contact = () => {
  
  let [product, setProduct] = useState([]);

  // let getProduct = ()=>{
  //   axios
  //   .get("https://fakestoreapi.com/products")
  //   .then(response=>{
  //     console.log(response.data)
  //     setProduct(response.data)
  //   })
  // }

  useEffect(()=>{

    axios
    .get(`${API_URL}`)
     .then(response=>{
       console.log(response.data)
       setProduct(response.data)
     })

  },[])


  return (
    <div className='container' style={{minHeight : "650px"}}>
      <div className="row">
        <div className="col-md-12">
          
          <br />
          <div className="row">
            
            {
              product.map((item, index)=>{
                return(
                  <div className="col-md-3">
                    <div className="card m-3 border border-info">
                      <img src={item.image} style={{height : "150px"}} className='card-img-top' />
                      <div className="card-body">
                        <p className='m-0 p-0'>{item.title.split(" ")[0]}</p>
                        <p className='text-secondary mb-0 pb-0'><small>{item.category}</small></p>
                        <p className='text-secondary mb-0 pb-0'><small>$ {item.price}</small></p>
                        <p className='m-0 p-0 text-warning'>
                          {
                            item.rating.rate >= 1 && item.rating.rate <= 1.4
                            ?
                            <>
                              <OneStar />
                            </>
                            :
                            item.rating.rate >= 1.5 && item.rating.rate < 2
                            ?
                            <>
                              <OneHalfStar />
                            </>
                            :
                            item.rating.rate >= 2 && item.rating.rate < 2.5
                            ?
                            <>
                              <TwoStar />
                         
                            </>
                            :
                            item.rating.rate >= 2.5 && item.rating.rate < 3
                            ?
                            <>
                              <TwoHalfStar />
                            </>
                            :
                            ''

                          }</p>
                      </div>
                      <div className="card-footer bg-info">
                        <button className='btn btn-light btn-sm'>Buy</button>
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
  )
}

export default Contact


let OneStar = ()=>{
  return(
    <>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    </>
  )
}
let OneHalfStar = ()=>{
  return(
    <>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star-half-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    </>
  )
}

let TwoStar = ()=>{
  return(
    <>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    </>
  )
}
let TwoHalfStar = ()=>{
  return(
    <>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star-half-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    </>
  )
}

let ThreeStar = ()=>{
  return(
    <>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    </>
  )
}
let ThreeHalfStar = ()=>{
  return(
    <>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star-half-o" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    </>
  )
}

let FourStar = ()=>{
  return(
    <>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star-o" aria-hidden="true"></i>
    </>
  )
}
let FourHalfStar = ()=>{
  return(
    <>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star-half-o" aria-hidden="true"></i>
    </>
  )
}

let FiveStar = ()=>{
  return(
    <>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    <i class="fa fa-star" aria-hidden="true"></i>
    </>
  )
}




// <i class="fa fa-star" aria-hidden="true"></i>
// <i class="fa fa-star-o" aria-hidden="true"></i>
// <i class="fa fa-star-half-o" aria-hidden="true"></i>

