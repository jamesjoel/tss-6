import Faculty from "../models/Faculty.js";
import sha1 from 'sha1'

let FetchFaculty = async(req, res)=>{
    let result = await Faculty.find();
    res.send(result);
}
let FetchFacultyById = async(req, res)=>{
    let result = await Faculty.find({_id : req.params.id });
    res.send(result);
}
let SaveFaculty = async(req, res)=>{
    delete req.body.repassword;
    req.body.password = sha1(req.body.password);
    
    let result = await Faculty.create(req.body);
    res.send({success: true, result});
}
let UpdateFaculty = async(req, res)=>{
    let result = await Faculty.updateMany({_id : req.params.id }, req.body);
    res.send({success: true, result});
}
let DeleteFaculty = async(req, res)=>{
    let result = await Faculty.deleteMany({_id : req.params.id });
    res.send({success: true, result});
}

export {SaveFaculty, UpdateFaculty, FetchFacultyById, FetchFaculty, DeleteFaculty};