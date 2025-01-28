import Product from "../models/Product.js";



const getAllProduct = async(req, res)=>{
    let result = await Product.find();
    res.send(result);
}


const addProduct = async(req, res)=>{
    await Product.create(req.body);
    res.send({success:true});
}


export {getAllProduct, addProduct};