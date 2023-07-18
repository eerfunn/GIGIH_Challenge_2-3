const mongoose = require("mongoose");

const DBConnect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/spotify");
    console.log("Database Conected!");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  DBConnect,
};
