const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    let data = [
        {
            name : "rohit",
            age : 25
        },
        {
            name : "amar",
            age : 22
        },
        {
            name : "vijay",
            age : 23
        },
        {
            name : "riya",
            age : 21
        }
    ]
    res.send(data)
})

app.listen(3000, ()=>{
    console.log("Server Running with port : 3000");
})