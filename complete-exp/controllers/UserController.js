import User from "../models/User.js";

let fetchAllUser = async(req, res)=>{
    let result = await User.find();
    res.send(result);
}

let saveUser = async(req, res)=>{
    await User.create(req.body);
    res.send({success:true});
}

let fetchUserByCity = async(req, res)=>{
    
    let city = req.params.city;
    let result = await User.find({city : city});
    res.send(result);
}


let deleteById = async(req, res)=>{
    console.log(req.params);
}




export {fetchAllUser, saveUser, fetchUserByCity, deleteById}