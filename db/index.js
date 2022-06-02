const { connectDB } = require("./config");

const makeDb = () => {
  connectDB();
};

module.exports = { makeDb };
