import Dep from "../models/Department.js";

let fetchDepartment = async(req, res)=>{
    let result = await Dep.find();
    res.send(result);

}

export {fetchDepartment}