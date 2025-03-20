import mongoose from '../config/conn.js'

let FacultySchema = mongoose.Schema({
    name : String,
    email : String,
    username : String,
    password : String,
    address : String,
    contact : String,
}, {timestamps:true})

let Faculty = mongoose.model("faculty", FacultySchema);

export default Faculty;