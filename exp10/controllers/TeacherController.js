const routes = require("express").Router();
const Teacher = require("../models/Teacher");

routes.get("/", async(req, res)=>{
    let result = await Teacher.find();
    res.send(result);
})
routes.post("/save", async(req, res)=>{
    await Teacher.create(req.body);
    res.send("data saved");
})


module.exports = routes;