// Connect to MongoDB

const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

// mongoose.conenct(db) returns a promise, that's why we put it after await

// Connect using Async await
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log("MongoDB Connected..");
  } catch (err) {
    console.error(err.message);
    // If failure, exit process
    process.exit(1);
  }
};

module.exports = connectDB;
