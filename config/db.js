
let DB_CONNECTION =
  "mongodb+srv://dbadmin:g9l5RMKpZbtTHMyb@cluster0.mvwne.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// Database Setup
let mongoose = require("mongoose");

module.exports = function () {
  // Connect to the DB
  mongoose.connect(DB_CONNECTION);

  let mongoDB = mongoose.connection;

  mongoDB.on("error", console.error.bind(console, "Connection Error: "));
  mongoDB.once("open", () => {
    console.log("Connected to MongoDB...");
  });

  return mongoDB;
};
