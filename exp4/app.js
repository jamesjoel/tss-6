const express = require("express");
const app = express(); // call constructor of express

// when any routes call, then system will redirect "./routes" file
app.use(require("./routes"));


const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Server Running with port ", port);
})