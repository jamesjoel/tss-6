import React from 'react'

const Login = () => {
  return (
    <div className="container" style={{minHeight : "700px"}}>
      <div className="row">
        <div className="col-md-6 offset-md-3 my-5">
          <div className="card">
            <div className="card-header bg-green">
              <h4 className='text-light'>Login for Property Owner</h4>
            </div>
            <div className="card-body">
            
              <div className="row">
                
                <div className="col-12 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email/Username"
                  />
                </div>

                <div className="col-12 mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                
                
                
              </div>
            
            </div>
            <div className="card-footer">
            <div className="col-12">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login