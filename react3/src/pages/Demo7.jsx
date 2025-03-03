import React, { useState } from 'react'

const Demo7 = () => {
    let [type, setType] = useState("password");
    let [lable, setLable] = useState("Show");
    let [cls, setCls] = useState("btn-primary");

    let showPwd = ()=>{
        if(lable=="Show"){
            setType("text");
            setLable("Hide")
            setCls("btn-danger")
        }else{
            setType("password")
            setLable("Show")
            setCls("btn-primary")
        }
    }

  return (
    <div className="container my-4">
        <div className="row">
            <div className="col-md-6">
                <h4>My Form</h4>
                <div className="input-group mb-3">
                    <input type={type} className="form-control" placeholder="Password" />
                    <button onClick={showPwd} className={"btn "+cls} type="button">{lable}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Demo7