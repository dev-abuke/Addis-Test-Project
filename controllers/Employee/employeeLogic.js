const Employee = require("../../model/employee");

const makeEmployeeBusinessLogic = () => {
  const createEmployee = async ({ data }) => {
    return await Employee.create(data);
  };

  const getAllEmployees = async () => {
    return await Employee.find();
  };

  const findEmployeeById = async ({ parameter }) => {
    const id = parameter.id;
    const employee = await Employee.findById(id);
    return employee;
  };

  const updateEmployee = async ({ parameter, data }) => {
    const id = parameter.id;
    return await Employee.findByIdAndUpdate(id, data, { new: true });
  };

  const deleteEmployee = async ({ parameter }) => {
    const id = parameter.id;
    return await Employee.findByIdAndDelete(id);
  };

  return {
    createEmployee,
    deleteEmployee,
    updateEmployee,
    getAllEmployees,
    findEmployeeById,
  };
};

module.exports = { makeEmployeeBusinessLogic };
