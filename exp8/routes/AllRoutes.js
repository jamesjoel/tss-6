const routes = require("express").Router();

routes.use("/api/v1/demo", require("../controllers/DemoController"));
routes.use("/api/v1/employee", require("../controllers/EmployeeController"));

module.exports = routes;