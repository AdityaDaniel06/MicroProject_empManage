const express = require("express");
const route = express.Router();
const empController = require("../controllers/empController");

route.post("/api/addEmployee", empController.addNewEmployee);

route.get("/api/getAllEmployee", empController.getAllEmployee);
module.exports = route;
