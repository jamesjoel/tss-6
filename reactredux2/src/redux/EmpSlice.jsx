import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
let getAllEmp = createAsyncThunk("getemp", async()=>{
    let response = await axios.get("http://localhost:3000/employee");
    return response.data;
});

let saveEmp = createAsyncThunk("save", async(obj)=>{
    let response = await axios.post("http://localhost:3000/employee", obj);
    return response.data;
})


let EmpSlice = createSlice({
    name : "emp",
    initialState : [],
    extraReducers : builder=>{
        builder.addCase(getAllEmp.fulfilled, (state, action)=>{
            return action.payload;
        });
        builder.addCase(saveEmp.fulfilled, (currState, action)=>{
            currState.push(action.payload);
        });
    }
})

export default EmpSlice.reducer;

export {getAllEmp, saveEmp}

/*
axios.get().then(resp=>{
})


let resp = await axios.get();





*/