import { createSlice } from "@reduxjs/toolkit";
import Que from '../db/que'
let QueSlice = createSlice({
    name : "que",
    initialState : Que,
    
})

export default QueSlice.reducer;