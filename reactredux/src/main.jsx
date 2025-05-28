import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import {configureStore, combineReducers} from '@reduxjs/toolkit'
import CityReducer from './redux/CitySlice'
import StudentReducer from './redux/StudentSlice'
import EmpReducer from './redux/EmpSlice'

const rootReducer = combineReducers({CityReducer, StudentReducer, EmpReducer})
const store = configureStore({reducer : rootReducer});

/*


  create a store by your reducer 
    --- import configureStore from @reduxjs/toolkit
    --- let store = configureStore({reducer : yourreduser})

  when we more then 2 reducer then
    ---- import combineReduer from @reduxjs/toolkit
    ---- create a variable and add your all reducer into it, by combineReducer
      
  import Provider from react-redux

  wrap your code into Provider and call its prop "store" by your store

*/




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

let arr = useSelector(state=>state.CityReducer);
let arr = useSelector(state=>state.StudentReducer);

*/