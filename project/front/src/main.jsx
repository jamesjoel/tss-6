import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD
import {BrowserRouter} from 'react-router-dom'
=======
// import {BrowserRouter } from react-router-dom

>>>>>>> 94f0369d95c6937b891c32975b39038a48d30ab7
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>
=======
    <App />
>>>>>>> 94f0369d95c6937b891c32975b39038a48d30ab7
  </StrictMode>,
)
