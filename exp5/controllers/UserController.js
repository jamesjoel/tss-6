const express = require("express");

const routes = express.Router();

routes.get("/", (req, res)=>{
    res.send("user home")
})
routes.get("/more", (req, res)=>{
    res.send("user more")
})
routes.get("/info", (req, res)=>{
    res.send("user info")
})
routes.get("/active", (req, res)=>{
    res.send("user active")
})

module.exports = routes;