const express = require("express"),
  Route = express.Router(),
  {
    getAllEmployees,
    updateEmployee,
    deleteEmployee,
    addEmployee,
  } = require("../controllers/employeeController.js");

Route.get("/home", getAllEmployees);
Route.post("/add", addEmployee);
Route.put("/update", updateEmployee);
Route.delete("/delete/:_id", deleteEmployee);

module.exports = Route;
