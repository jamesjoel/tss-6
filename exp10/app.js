const express = require("express");
const app = express();
const cors = require("cors");
const upload = require("express-fileupload");

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(upload());

// app.use(require("./routes/AllRoutes"));


app.post("/api/v1/image", async(req, res)=>{
    // console.log(req.files);
    let photo = req.files.photo;
    photo.mv("E:/tss-6/exp10/images/"+photo.name);

})


const port = process.env.PORT || 3000;

// console.log("VIJAY");

app.listen(port, ()=>{
  console.log("Server running")
})

/*
    express
    cors
    mongoose
    sh1
    jsonwebtoken
    express-fileupload

*/