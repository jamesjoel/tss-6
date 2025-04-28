import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import App from './App'
import App2 from './App2'
import App3 from './App3'
import App4 from './App4'
import App5 from './App5'
import App6 from './App6'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App6 />
    </BrowserRouter>
  </StrictMode>,
)
