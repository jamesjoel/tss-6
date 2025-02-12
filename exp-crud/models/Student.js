import mongoose from "../config/conn.js";

let StudentSchema = mongoose.Schema({
    name : String,
    age : Number,
    city : String,
    fee : Number,
    createdAt : {type:Date, default: new Date()}
})

let Student = mongoose.model("student", StudentSchema);

export default Student;


