import mongoose from '../config/conn.js'

let SeekerSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    address : String,
    contact : String,
    gender : String,
}, {timestamps:true})

let Seeker = mongoose.model("seeker", SeekerSchema);

export default Seeker;