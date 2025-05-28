import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'
import AlertBox from '../components/AlertBox'




const Details = () => {

    let [showAlert, setShowAlert] = useState(false);


    let [btnDisable, setBtnDisable] = useState(true);

    

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
    let [advMoney, setAdvMoney] = useState("");


    let id = param.id;
    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/property/find/${id}`)
        .then(response=>{
            // console.log(response.data[0])
            setProperty(response.data[0])

            setOwnername(response.data[0].owner_id.name)
            setOwnernum(response.data[0].owner_id.contact);
            setAdvMoney(response.data[0].advance_money);
        })
    },[])

    let goToLogin = ()=>{
        setShow(false);
        navigate("/seeker/login")
    }

    let sendMsg = ()=>{
        axios.post(`${import.meta.env.VITE_API_URL}/message/order`, 
            { 
                message : msg, 
                seeker_token : localStorage.getItem("access-token"),
                property_id : property._id,
                owner_id : property.owner_id._id,
                amount : advMoney
            }
        )
        .then(response=>{
            setShowMsg(false);
            setMsg("");
            if(response.data.success==true){
                let option = {
                    key : "rzp_test_r9QcVPwqwQUWB9",
                    amount : advMoney*100,
                    currency : 'INR',
                    order_id : response.data.orderId,
                    handler : (rzpyRes)=>{
                        console.log(rzpyRes);
                    },
                    theme : "#004512"
                };
                const rzpy = window.Razorpay(option);
                rzpy.open();
            }
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
    {/* setShowAlert(false) */}
    <AlertBox show={showAlert} lable="Go To Login" nav="/seeker/login" closeAlert={setShowAlert} title="Warning !" body="You are not logged in to see Owner Detail"  />
    <Modal show={showMsg} onHide={()=>setShow(false)}>
        <Modal.Header>
                <Modal.Title>Message to Property Owner</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <textarea onChange={(e)=>getValue(e)} className='form-control' placeholder='Message to Owner'></textarea>
        </Modal.Body>
        <Modal.Footer>
            <Button variant='danger' onClick={()=>setShowMsg(false)}>Close</Button>
            <Button disabled={btnDisable} variant='success' onClick={sendMsg}>Pay Now</Button>
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
                        <img src={`http://localhost:3000/upload_images/${property.image}`} className='img-thumbnail'/>
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
                                                item=="Water"
                                                ?
                                                <span>&nbsp;&nbsp;<i class="fa fa-tint" aria-hidden="true"></i> {item}</span>
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
                    <p><b>Advance Booking Amount</b>  {localStorage.getItem("access-token") ? advMoney : '---'}</p>
                    {
                        localStorage.getItem("access-token")
                        ?
                        <button onClick={()=>setShowMsg(true)} className='btn btn-success btn-sm'>Message & Pay to Owner</button>
                        :
                        <button onClick={()=>setShowAlert(true)} className='btn btn-info btn-sm'>Contact Owner</button>

                    }
                </div>
            </div>
        </div>


       

    </div>

    </>
  )
}

export default Details