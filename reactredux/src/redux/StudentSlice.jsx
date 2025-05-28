import {createSlice} from '@reduxjs/toolkit'

let stu = [
    {
        id : 1,
        name : "rohit",
        age : 25
    },
    {
        id : 2,
        name : "vijay",
        age : 21
    },
    {
        id : 3,
        name : "jaya",
        age : 20
    },
    {
        id : 4,
        name : "amar",
        age : 26
    }
];

let StudentSlice = createSlice({
    name : "student",
    initialState : stu
    
})

export default StudentSlice.reducer;