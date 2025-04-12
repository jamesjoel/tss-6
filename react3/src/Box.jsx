import React, {memo} from 'react'

let Box = ({name})=>{
    console.log("Box Compo")
    
    return(
        <>
        <h1>hello</h1>
        <h1>{name}</h1>
        </>
    )
}

export default Box;