const empModel = require("../models/empModel");

const addNewEmployee = async (req, res) => {
  const { id, name, email, mob, dept, sal } = req.body;

  const empData = await empModel.create({
    empId: id,
    empName: name,
    empEmail: email,
    empContact: mob,
    empDept: dept,
    empSalary: sal,
  });
  res.status(201).send("Data added successfully", empData);
};

const getAllEmployee = async (req, res) => {
  const empData = await empModel.find();
  res.send(empData);
};

module.exports = { addNewEmployee, getAllEmployee };
