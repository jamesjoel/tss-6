const express = require("express");
const app = express();

app.use(require("./routes/AllRoutes"))

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("server running ")
})