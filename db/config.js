const mongoose = require("mongoose");

const password = encodeURIComponent("abuki");
const uri = `mongodb+srv://abuki:${password}@initialcluster.trudu.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = { connectDB };
