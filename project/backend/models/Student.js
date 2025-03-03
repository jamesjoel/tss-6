import mongoose from '../config/conn.js'

let StuSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    studentId : String,
    department : String,
    state : String,
    city : String,
    gender : String,
    address : String
}, { timestamps : true })

let Stu = mongoose.model("student", StuSchema);

export default Stu;