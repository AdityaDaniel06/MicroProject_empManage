const mongoose = require("mongoose");

const empSchema = new mongoose.Schema({
  empId: {
    type: String,
    required: [true, "Employee ID should be provided"],
    unique: true,
  },
  empName: {
    type: String,
    required: [true, "Employee Name should be provided"],
  },
  empContact: {
    type: String,
    required: true,
    unique: true,
  },
  empDept: {
    type: String,
    required: false,
  },
  empSalary: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model("employee", empSchema);
