import User from "../models/User.js";

let fetchAllUser = async(req, res)=>{
    let result = await User.find();
    res.send(result);
}

let saveUser = async(req, res)=>{
    await User.create(req.body);
    res.send({success:true});
}

export {fetchAllUser, saveUser}