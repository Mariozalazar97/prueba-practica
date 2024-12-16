const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/viva-el-papoooo");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
