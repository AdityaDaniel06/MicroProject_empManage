const empModel = require("../models/empModel");

const addNewEmployee = async (req, res) => {
  try {
    const { id, name, email, mob, dept, sal } = req.body;

    const empData = await empModel.create({
      empId: id, // string , unique
      empName: name, //string
      empEmail: email, //string
      empContact: mob, // Number , unique
      empDept: dept, // string
      empSalary: sal, //string
    });
    // res.status(201).send("Data added successfully", empData);
    res.status(201).json(empData);
  } catch (error) {
    console.error(error);
    res.status(404).send("Bad request");
  }
};

const getAllEmployee = async (req, res) => {
  try {
    const empData = await empModel.find();
    res.send(empData);
  } catch (error) {
    console.error(error);
    res.status(404).send("Server Error");
  }
};

const deleteEmployee = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const empData = await empModel.deleteOne({ empId: id });
    if (!empData) return res.status(404).send("Employee not found");
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid Data sent!",
    });
  }
};

module.exports = { addNewEmployee, getAllEmployee, deleteEmployee };
