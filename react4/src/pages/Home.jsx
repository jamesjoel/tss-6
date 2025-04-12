import React, { useState } from 'react'
import InputeValue from '../components/InputeValue'
import ListValue from '../components/ListValue'

const Home = () => {
    let [users, setUsers] = useState([]);

  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-12">
                <InputeValue setUsers={setUsers} />
                <hr />
                <ListValue users={users} />
            </div>
        </div>
    </div>
  )
}

export default Home