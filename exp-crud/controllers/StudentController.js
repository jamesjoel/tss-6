import Student from '../models/Student.js'

let fetchAllStudent = async(req, res)=>{
    let result = await Student.find();
    res.send(result);
}

let fetchStudentById = async(req, res)=>{
    let id = req.params.id;
    let result = await Student.find({_id:id});
    res.send(result);
}
let saveStudent = async(req, res)=>{

    await Student.create(req.body);
    res.send({ success:true });
}
let updateStudent = async(req, res)=>{
    let id = req.params.id;
    await Student.updateMany({_id:id}, req.body);
    res.send({ success:true });
}
let deleteStudent = async(req, res)=>{
    let id = req.params.id;
    await Student.deleteMany({_id:id});
    res.send({ success:true });
}

export {deleteStudent, fetchAllStudent, fetchStudentById, updateStudent, saveStudent};