let mongoose = require("mongoose");
let validator = require("validator");

let employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Employee Name is Required"],
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.default.isAlphanumeric(value);
    },
  },
  dob: {
    type: String,
    required: true,
    unique: false,
    validate: (value) => {
      return validator.default.isAlphanumeric(value);
    },
  },
  salary: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    lowercase: true,
    validate: (value) => {
      return validator.default.contains(value, "male" || "female");
    },
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
