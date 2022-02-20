let mongoose = require("mongoose");
let crypto = require("crypto");

// Create a model class
let UserSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: {
      type: String,
      match: [/.+\@.+\..+/, "Please fill a valid e-mail address"],
    },
    username: {
      type: String,
      unique: true,
      required: "Username is required",
      trim: true,
    },
    password: {
      type: String,
      validate: [
        (password) => {
          return password && password.length > 6;
        },
        "Password should be longer",
      ],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "user",
  }
);

UserSchema.virtual("fullName")
  .get(function () {
    return this.firstName + " " + this.lastName;
  })
  .set(function (fullName) {
    let splitName = fullName.split(" ");
    this.firstName = splitName[0] || "";
    this.lastName = splitName[1] || "";
  });

UserSchema.methods.authenticate = function (password) {
  return this.password === password;
};

module.exports = mongoose.model("user", UserSchema);
