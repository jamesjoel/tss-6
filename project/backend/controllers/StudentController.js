import Student from "../models/Student.js";

let fetchStudent = async(req, res)=>{
    let result = await Student.find();
    res.send(result);
}

let saveStudent = async(req, res)=>{
    await Student.create(req.body);
    res.send({success:true});
}

export {fetchStudent, saveStudent}