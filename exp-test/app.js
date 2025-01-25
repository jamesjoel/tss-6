const express = require("express");
const app = express();

app.use(express.static(__dirname+"/assets"));
app.get("/api/v1/student", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
})
// app.use(require("./routes/allRoutes"));

const port = process.env.PORT || 3000;
app.listen({port:port, host : "0.0.0.0"}, ()=>{
    console.log("Server Running with port ", port);
})

/*

http://192.168.0.107:3000/api/v1/student

*/