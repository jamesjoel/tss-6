import Product from "../models/Product.js";



const getAllProduct = async(req, res)=>{
    let result = await Product.find();
    res.send(result);
}

const getAllProductByCategory = async(req, res)=>{
    let x = req.params.a;
    let result = await Product.find({ category : x });
    res.send(result);
}


const addProduct = async(req, res)=>{
    await Product.create(req.body);
    res.send({success:true});
}


const deleteById = async(req, res)=>{
    let id = req.params.id;
    await Product.deleteMany({_id : id});
    res.send({success : true})
}


const updateById = async(req, res)=>{
    let id = req.params.id;
    await Product.updateMany({_id : id}, req.body);
    res.send({success:true})
}

export {getAllProduct, addProduct, getAllProductByCategory, deleteById, updateById};