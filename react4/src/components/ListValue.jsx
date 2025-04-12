import React, { useState } from 'react'

const ListValue = ({users}) => {
    

  return (
    <div className="row">
        <div className="col-md-8 offset-md-2">
            <h3>List of All Users</h3>
            <ul>
                {
                    users.map(item=><li>{item}</li>)
                }
            </ul>
        </div>
    </div>
  )
}

export default ListValue