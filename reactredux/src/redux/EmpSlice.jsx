import { createSlice } from '@reduxjs/toolkit'

let EmpSlice = createSlice({
    name : "emp",
    initialState : [
        {
            id : 1,
            name : "rohit",
            salary : 5000,
            dep : "HR"
        },
        {
            id : 2,
            name : "vijay",
            salary : 14000,
            dep : "IT"
        },
        {
            id : 3,
            name : "nidhi",
            salary : 15000,
            dep : "Office"
        }
    ],
    reducers : {
        addEmp(currentState, action){
            currentState.push(action.payload);
        }
    }
})

export default EmpSlice.reducer;
export let {addEmp} = EmpSlice.actions;


/*
    addEmp({ name : "sunil", salary : 10000, dep : "HR"})
*/