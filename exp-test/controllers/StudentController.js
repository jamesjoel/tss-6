const routes = require("express").Router();

// localhost:3000/api/v1/student
routes.get("/", (req, res)=>{
    // res.send("welcome");
    res.sendFile(__dirname+"/index.html")
})


routes.get("/info", (req, res)=>{
    res.send("info")
})
routes.get("/info/demo", (req, res)=>{
    // res.send("************")

})

module.exports = routes;