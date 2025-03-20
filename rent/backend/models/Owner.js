import mongoose from '../config/conn.js'

let OwnerSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    address : String,
    contact : String,
}, {timestamps:true})

let Owner = mongoose.model("owner", OwnerSchema);

export default Owner;