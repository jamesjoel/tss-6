require("../config/conn")
let mongoose = require("mongoose")
let EmpSchema = mongoose.Schema({
    name : String,
    salary : Number,
    age : Number
})
let Emp = mongoose.model("employee", EmpSchema);

module.exports = Emp;