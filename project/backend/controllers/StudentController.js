import Student from "../models/Student.js";
import sha1 from 'sha1';

let fetchStudent = async(req, res)=>{
    let result = await Student.find();
    res.send(result);
}

let saveStudent = async(req, res)=>{
    delete req.body.repassword;
    req.body.password = sha1(req.body.password);
    
    
    await Student.create(req.body);
    res.send({success:true});
}

export {fetchStudent, saveStudent}