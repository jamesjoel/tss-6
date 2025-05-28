import {createSlice} from '@reduxjs/toolkit'

let CitySlice = createSlice({
    name : "city",
    initialState : ["indore", "mumbai", "pune", "delih"] 
});

export default CitySlice.reducer;