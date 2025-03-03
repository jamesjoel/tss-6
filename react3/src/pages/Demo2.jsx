import React, { useState } from 'react'

const Demo2 = () => {
    let [name, setName] = useState("");
    let [email, setEmail] = useState("")

    
  return (
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h3>Welcome</h3>
                <h4>{name}</h4>
                <h4>{email}</h4>
               Full Name <input placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)} type='text' />
               <br />
               Email <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />

            </div>
        </div>
    </div>
    </>
  )
}

export default Demo2
/*
FORM -
    22 tag
        v4
            text,
            password,
            textarea,
            checkbox,
            radio,
            select-option,
            file,
            button,
            submit,
            reset,
            hidden
        v5
            email,
            date,
            week,
            month,
            date-time,
            color,
            range,
            url,
            search,
            number,
            year
            




*/