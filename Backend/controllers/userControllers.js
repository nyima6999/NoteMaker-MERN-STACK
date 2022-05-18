const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

// user registration authentification function
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  // define user data
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("user already exist");
    // if user exist in mongodb , throw this  error
  }
  // if user not exist, create this user
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  //  if user successfully created, response with status 201
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
  //   res.json({
  //     name,
  //     email,
  //   });
});
module.exports = registerUser;
