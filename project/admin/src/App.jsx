import React from 'react'
import AllRoutes from './routes/AllRoutes'
import Sidebar from './components/Sidebar'
import Header from './components/Header'

const App = () => {
  return (
    <>
    <div className="container-fluid position-relative d-flex p-0">
        <Sidebar />        
        <div className="content">
            <Header />
            <AllRoutes />
        
            
        </div>
       
    </div>
    </>
  )
}

export default App