import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import StudentReducer from './redux/StudentSlice'
import EmpReducer from './redux/EmpSlice'

let rootReducer = combineReducers({StudentReducer, EmpReducer})

let store = configureStore({
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


/*
  react-redux 
      Provider, useSelecotr, useDispatch

  @reduxjs/toolkit
    configureStore, combineReducer, createSlice

*/