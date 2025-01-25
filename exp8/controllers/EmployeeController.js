let routes = require("express").Router();
let Emp = require("../models/EmployeeModel");


routes.get("/", async(req, res)=>{
    let result = await Emp.find();
    res.send(result);
})

module.exports = routes;