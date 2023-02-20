const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "please enter a username"],
    },
    email: {
      type: String,
      required: [true, "please enter an email address"],
      unique: [true, "Email already taken"],
    },
    password: {
      type: String,
      required: [true, "please enter a password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
