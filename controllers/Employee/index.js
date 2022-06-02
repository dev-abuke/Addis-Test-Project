const { makeEmployeeBusinessLogic } = require("./employeeLogic");

const makeEmployeeController = () => {
  return makeEmployeeBusinessLogic();
};

module.exports = { makeEmployeeController };
