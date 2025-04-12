import React, { useState } from 'react'

const Demo = () => {

    let [num, setNum] = useState(100)

    let a = true;

    let ok = ()=>{
        // setNum(500)    
        setNum(()=>{
            if(a==true){
                return 600;
            }else{
                return 700;
            }
        })
    }

    let hello = ()=>{
        setNum((x)=>{
            return x/2;
        })
    }
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-12">
                <h1>{num}</h1>
                <button onClick={ok}>OK</button>
                <br />
                <br />
                <button onClick={hello}>hello</button>
            </div>
        </div>
    </div>
  )
}

export default Demo