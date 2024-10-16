const express = require("express");
const route = express.Router();
const empController = require("../controllers/empController");

//POST api to addd new employees
route.post("/api/addEmployee", empController.addNewEmployee);

//GET api to get all employees
route.get("/api/getAllEmployee", empController.getAllEmployee);

// Delete api to remove employees
route.delete("/api/deleteEmployee/:id", empController.deleteEmployee);

// Get SingleEmployee
route.get("/api/getEmployee/:id", empController.getEmployee);

// update employee
route.put("/api/updateEmployee/:id", empController.updateEmployee);

module.exports = route;
