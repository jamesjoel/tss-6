import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import App from './App'
import App2 from './App2'
import App3 from './App3'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App3 />
    </BrowserRouter>
  </StrictMode>,
)
