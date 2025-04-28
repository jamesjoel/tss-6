import express from 'express'
import path from 'path'
import upload from 'express-fileupload'
import mongoose from 'mongoose'
import cors from 'cors'
const app = express();

mongoose.connect("mongodb://0.0.0.0:27017/tss6_30");
let ImgSchema = mongoose.Schema({
    name : String,
    image : String
})
let Img = mongoose.model("image", ImgSchema);

app.use(express.static(path.resolve()+"/assets"));
app.use(cors())
app.use(upload())
app.use(express.json())
app.use(express.urlencoded({extended:true}));

const UploadImage = async(req, res)=>{
    let photo = req.files.photo;
    req.body.image = photo.name;
    
    let uploadpath = path.resolve()+"/assets/img/";
    await photo.mv(uploadpath+photo.name)
    let result = await Img.create(req.body);
    res.send({success:true, result : result});

}

let FindAllImage = async(req, res)=>{
    let result = await Img.find();
    res.send(result);
}

app.post("/api/v1/images", UploadImage);
app.get("/api/v1/images", FindAllImage)




app.listen(3000, ()=>{
    console.log("Server Running");
})