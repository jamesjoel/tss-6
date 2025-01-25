const express = require("express");
const routes = express.Router();

routes.get("/", (req, res)=>{
    res.send("home")
});
routes.get("/about", (req, res)=>{
    res.send("about")
});
routes.get("/contact", (req, res)=>{
    res.send("contact")
});
routes.get("/help", (req, res)=>{
    res.send("help")
});

module.exports = routes;