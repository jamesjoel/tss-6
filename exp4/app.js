const express = require("express");
const app = express(); // call constructor of express
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://demouser:demouser123@cluster0.io84a.mongodb.net")


app.use(express.json())
app.use(express.urlencoded({extended : true}));

const StuSchema = mongoose.Schema({
    name : String,
    age : Number,
    city : String
})

const Stu = mongoose.model("student", StuSchema);

const TeacherSchema = mongoose.Schema({
    name : String,
    salary : Number,
    gender : String
})

const Teacher = mongoose.model("teacher", TeacherSchema)
// mongodb+srv://demouser:demouser123@cluster0.io84a.mongodb.net


app.get("/api/v1/student", async(req, res)=>{

    let result = await Stu.find();

    res.send(result);
})

app.get("/api/v1/teacher", async(req, res)=>{
    let result = await Teacher.find();
    res.send(result);
})
app.post("/api/v1/teacher", async(req, res)=>{
    await Teacher.create(req.body);
    res.send({success:true})
})


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Running with port ", port);
})