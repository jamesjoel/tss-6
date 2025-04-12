import React from 'react'

const Box = ({n, c, a, salary, borderColor}) => {

    let x = borderColor ? borderColor : 'red';

  return (
    <div style={{margin : "10px", border : `1px solid ${x}`, padding : "10px", minHeight : "150px", width : "200px"}}>
        <h1>{n}</h1>
        <h3>{c}</h3>
        <p>{a}</p>
        <p>{salary}</p>
    </div>
  )
}

export default Box