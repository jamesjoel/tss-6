const routes = require("express").Router();


routes.use("/api/v1/teacher", require("../controllers/TeacherController"));

module.exports = routes;