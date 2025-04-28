import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'
const Photos = () => {
  let [allImg, setAllImg] = useState([]);
  let [name, setName] = useState("");
  let file = useRef();

  useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/images")
    .then(response=>{
      // console.log(response.data);
      setAllImg(response.data);
    })
  },[])




  let handleUpload = ()=>{
    let myFrm = new FormData();
    myFrm.append("name", name);
    myFrm.append("photo", file.current.files[0]);
    axios.post("http://localhost:3000/api/v1/images", myFrm)
    .then(response=>{
      // console.log(response.data);
      setAllImg([...allImg, response.data.result]);
      setName("");
      file.current("");

    })
  }

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-12">
                <h3>Upload Your Images/Photos</h3>
                <div className="row">
                  <div className="col-md-5">
                    <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Image Name' className='form-control' />
                  </div>
                  <div className="col-md-5">
                    <input ref={file} type='file' className='form-control' />
                  </div>
                  <div className="col-md-2">
                    <button onClick={handleUpload} className='btn btn-success'>Upload</button>
                  </div>
                </div>
                <div className="row my-4">
                  {
                    allImg.map(item=>{
                      return(
                        <div key={item._id} className="col-md-3">
                            <img src={'http://localhost:3000/img/'+item.image} className='img-thumbnail' style={{height : "250px"}}/>
                            <br />
                            <h6>{item.name}</h6>
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

export default Photos