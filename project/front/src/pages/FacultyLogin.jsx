import React from 'react'

const FacultyLogin = () => {
  return (
    <div className="container" style={{minHeight : "600px"}}>
      <div className="row">
        <div className="col-md-6 offset-md-3 my-5">
          <div className="card border border-blue">
            <div className="card-header bg-blue">
              <h3 className='text-light text-center'>Faculty Login</h3>
            </div>
            <div className="card-body">
              <div className='my-2'>
                <label>Username/Email</label>
                <input type='text' className='form-control' />
              </div>
              <div className='my-2'>
                <label>Password</label>
                <input type='password' className='form-control' />
              </div>
            </div>
            <div className="card-footer bg-blue">
              <button type='submit' className='btn btn-light'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FacultyLogin