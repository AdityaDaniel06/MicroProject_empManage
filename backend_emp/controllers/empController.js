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
    res.status(500).send("Server Error");
  }
};

const getEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const empData = await empModel.find({ empId: id });
    if (!empData) return res.status(404).send("Employee not found");
    res.send(empData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const deleteEmployee = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
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

const updateEmployee = async (req, res) => {
  console.log("data received", req.body, req.params);
  try {
    const { id } = req.params;
    const { name, email, mob, dept, sal } = req.body;
    console.log(id);
    // const empData = await empModel.findOneAndUpdate(
    const empData = await empModel.updateOne(
      { empId: id },
      {
        $set: {
          empName: name,
          empEmail: email,
          empContact: mob,
          empDept: dept,
          empSalary: sal,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!empData) {
      return res.status(404).json("Employee not found.");
    }
    res.status(200).json("Data successfully updated.");
  } catch (error) {
    console.error(error);
    res.status(400).send("Bad request");
  }
};

module.exports = {
  addNewEmployee,
  getAllEmployee,
  deleteEmployee,
  getEmployee,
  updateEmployee,
};
