const routes = require("express").Router();


routes.use("/api/v1/student", require("../controllers/StudentController"));

module.exports = routes;
/*
    localhost:3000/api/v1/teacher

    localhost:3000/api/v1/student
    localhost:3000/api/v1/student/info
    localhost:3000/api/v1/student/info/demo

*/