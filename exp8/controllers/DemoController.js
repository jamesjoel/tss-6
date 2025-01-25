const routes = require("express").Router();
const Demo = require("../models/DemoModel")


routes.get("/", async(req, res)=>{
    let result = await Demo.find();
    res.send(result);
})

module.exports = routes;