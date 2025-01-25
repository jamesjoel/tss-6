const express = require("express");
const routes = express.Router();


routes.use("/api/v1/user", require("../controllers/UserController"));

module.exports = routes;