import '../config/conn.js';
import mongoose from 'mongoose';

let UserSchema = mongoose.Schema({
    name : String,
    email : String,
    contact : Number,
    city : String,
    createdAt : {type:Date, default : new Date()}
})

let User = mongoose.model("user", UserSchema);

export default User;