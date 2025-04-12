import React, {memo} from 'react'

const Box2 = ({name, hello}) => {
    console.log("BOX2")
  return (
    <>
    <div>Box2</div>
    <h1>{name}</h1>
    <button onClick={hello}>ok</button>
    </>
  )
}

export default memo(Box2)