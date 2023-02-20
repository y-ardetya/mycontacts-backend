const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
//@description Register the user
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("Please enter all fields");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already exists");
  }

  res.json({ message: "register the user" });
});

//@description Login the user
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "login the user" });
});

//@description Current user
//@route GET /api/users/current
//@access public
const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "current user information" });
});

module.exports = { registerUser, loginUser, currentUser };
