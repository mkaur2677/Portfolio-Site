let mongoose = require("mongoose");

// Create a model class
let BusinessContactsSchema = mongoose.Schema(
  {
    contactName: String,
    contactNumber: String,
    contactEmail: String,
  },
  {
    collection: "contact-list",
  }
);

module.exports = mongoose.model("contact-list", BusinessContactsSchema);
