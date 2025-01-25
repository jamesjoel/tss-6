require("../config/conn");

const mongoose = require("mongoose");

let TeacherSchema = mongoose.Schema({
    name : String,
    salary : Number,
    city : String
})

let Teacher = mongoose.model("teacher", TeacherSchema);

module.exports = Teacher;