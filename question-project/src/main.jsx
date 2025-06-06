import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore, combineReducers} from '@reduxjs/toolkit'
import QueReducer from './redux/QueSlice'
import SortedQueReducer from './redux/SortedQueSlice'
import AnsReducer from './redux/AnsSlice'
const rootReducer = combineReducers({QueReducer, SortedQueReducer, AnsReducer})

const store = configureStore({
  reducer : rootReducer
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
