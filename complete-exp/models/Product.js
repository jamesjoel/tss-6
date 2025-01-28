import '../config/conn.js';
import mongoose from 'mongoose';

const ProSchema = mongoose.Schema({
    title : String,
    price : Number,
    category : String,
    quantity : Number,
    createdAt : { type : Date, default : new Date()},
    
})

const Product = mongoose.model("product", ProSchema);

export default Product;
