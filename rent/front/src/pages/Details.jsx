import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'




const Details = () => {

    let [btnDisable, setBtnDisable] = useState(true);

    let [show, setShow] = useState(false);

    let [showMsg, setShowMsg] = useState(false);

    let [msg, setMsg] = useState("");

    let param = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    let [property, setProperty] = useState({});

    let [ownername, setOwnername] = useState("");
    let [ownernum, setOwnernum] = useState("")


    let id = param.id;
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/property/find/${id}`)
        .then(response=>{
            // console.log(response.data[0])
            setProperty(response.data[0])

            setOwnername(response.data[0].owner_id.name)
            setOwnernum(response.data[0].owner_id.contact);
        })
    },[])

    let goToLogin = ()=>{
        setShow(false);
        navigate("/seeker/login")
    }

    let sendMsg = ()=>{
        axios.post(`${import.meta.env.VITE_API_URL}/message`, 
            { 
                message : msg, 
                seeker_token : localStorage.getItem("access-token"),
                property_id : property._id,
                owner_id : property.owner_id._id
            }
        )
        .then(response=>{
            // console.log(response.data);
            setShowMsg(false);
            setMsg("");
        })
    }

    let getValue = (e)=>{
        setMsg(e.target.value);
        if(e.target.value == ""){
            setBtnDisable(true)
        }else{
            
            setBtnDisable(false)
        }
    }
  return (
    <>
    <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are not logged in to see Owner Detail</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={goToLogin}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>

    <Modal show={showMsg} onHide={()=>setShow(false)}>
        <Modal.Header>
                <Modal.Title>Message to Property Owner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <textarea onChange={(e)=>getValue(e)} className='form-control' placeholder='Message to Owner'></textarea>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='danger' onClick={()=>setShowMsg(false)}>Close</Button>
            <Button disabled={btnDisable} variant='success' onClick={sendMsg}>Send</Button>
        </Modal.Footer>
    </Modal>
    <div className="container my-5" style={{top : "100px", position : "relative", minHeight : "700px"}}>
        <div className="row">
            <div className="col-md-8">
                <div className='card m-1 p-3'>
                   <h3>{property.title}</h3>
                   <h5>&#8377; {property.rent ? property.rent.toFixed(2) : ''}</h5>
                   <p><i class="fa fa-map-marker" aria-hidden="true"></i> {property.address}</p>

                   <div className='row'>
                    <div className='col-md-5'>
                        <img src='/assets/images/img_7.jpg' className='img-thumbnail'/>
                    </div>
                    <div className='col-md-7'>
                        <div className='px-2 py-3 bg-dark'>
                            
                            <p className='m-0 p-0 text-light'>
                                {
                                    property.amenity
                                    ?
                                    property.amenity.map(item=>{
                                       return(
                                        <>
                                            {
                                                item=="Parking"
                                                ?
                                                <span>&nbsp;&nbsp;<i class="fa fa-car" aria-hidden="true"></i> {item}</span>
                                                :
                                                item == "WiFi"
                                                ?
                                                <span>&nbsp;&nbsp;<i class="fa fa-wifi" aria-hidden="true"></i> {item}</span>
                                                :
                                                item=="Electricity"
                                                ?
                                                <span>&nbsp;&nbsp;<i class="fa fa-bolt" aria-hidden="true"></i> {item}</span>
                                                :
                                                item=="Full Furnished"
                                                ?
                                                <span>&nbsp;&nbsp;<i class="fa fa-bed" aria-hidden="true"></i> {item}</span>
                                                :
                                                item=="Semi Furnished"
                                                ?
                                                <span>&nbsp;&nbsp;<i class="fa fa-adjust" aria-hidden="true"></i> {item}</span>
                                                :
                                                ''
                                            }
                                        </>                                     
                                        
                                       )
                                    })
                                    :
                                    ''
                                }
                                </p>
                        </div>

                        <div className='row mt-4'>
                            <div className="col-md-12">
                                <p className='m-0 p-0'>Property Type</p>
                                <p className='m-0 p-0 fw-bold'>{property.property_type}</p>
                            </div>
                            

                            
                        </div>
                       
                    </div>
                   </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className='card m-1 p-3'>
                    <h3>Owner Contact</h3>
                    <p><b>Owner Name</b> { localStorage.getItem("access-token") ? ownername : '---'}</p>
                    <p><b>Owner Contact</b> + {localStorage.getItem("access-token") ? ownernum : '000'}</p>
                    {
                        localStorage.getItem("access-token")
                        ?
                        <button onClick={()=>setShowMsg(true)} className='btn btn-success btn-sm'>Message To Owner</button>
                        :
                        <button onClick={()=>setShow(true)} className='btn btn-info btn-sm'>Contact Owner</button>

                    }
                </div>
            </div>
        </div>


       

    </div>

    </>
  )
}

export default Details