import React from 'react'
import Header from './components/Header'
import AllRoutes from './routes/AllRoutes'

const App = () => {
  return (
    <>
        <Header />
        <div className="">
                <AllRoutes />
        </div>
    </>
  )
}

export default App