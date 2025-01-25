const express = require("express");
const app = express();

// http://localhost:3000/api/v1/user
app.get("/api/v1/user", (req, res)=>{
    let userData = [
        {
            id : 1,
            name : "rohit",
            age : 25
        },
        {
            id : 2,
            name : "vijay",
            age : 21
        },
    ];
    res.send(userData);
})
app.get("/api/v1/product", (req, res)=>{
    let productData = [
        {
            id : 1,
            title : "I-Phone",
            price : 24500,
            category : "mobile"
        },
        {
            id : 2,
            title : "Sofa",
            price : 12500,
            category : "Home Applicance"
        },
        {
            id : 3,
            title : "Firdge",
            price : 20000,
            category : "electronics"
        },
    ];
    res.send(productData);
})

const port = process.env.PORT || 3000; 
app.listen(port, ()=>{
    console.log("Server Running");
});