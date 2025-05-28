import {createSlice} from '@reduxjs/toolkit'

let StudentSlice = createSlice({
    name : "student",
    initialState : [
        {
            id : 1,
            name : "rohit",
            age : 25
        },
        {
            id : 2,
            name : "vijay",
            age : 21
        }
    ],
    reducers : {
        addStu(currState, action){
            action.payload.id = currState.length+1;
            currState.push(action.payload)
            // return["rohit"];
        },
        removeStu(currState, action){
            return currState.filter(item=>item.id != action.payload)
        },
        removeAll(currState, action){
            return [];
        },
        updateStu(currState, action){
            // let newarr = currState.map(item=>{
            //     if(item.id == action.payload.id){
            //         return action.payload;
            //     }else{
            //         return item;
            //     }
            // })
            return currState.map(item=> item.id == action.payload.id ? action.payload : item)
        }
    }
})

export default StudentSlice.reducer;

export let {addStu, removeStu, removeAll, updateStu} = StudentSlice.actions;