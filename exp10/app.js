const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));


app.use(require("./routes/AllRoutes"));

const port = process.env.PORT || 3000;

// console.log("VIJAY");

// app.listen(port, ()=>{
//     console.log("ROHIT");
//     console.log("AMAR");
// })


let start = async()=>{
    await app.listen(3000);
    console.log("server running");
}

start();