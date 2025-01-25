const routes = require("express").Router();

routes.get("/", (req, res)=>{
    res.send("teacher");
})

module.exports = routes;