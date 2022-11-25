const express = require("express");
const router = express.Router();
const User = require("../Schema/schema");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

router.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const findUser = await User.findOne({ email: email });
    if (findUser) {
      return res
        .status(409)
        .json({ message: "User already exists, please login" });
    } else {
      const newUser = new User({
        _id: new mongoose.Types.ObjectId(),
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      });
      const registerUser = await newUser.save();
      if (registerUser) {
        return res
          .status(201)
          .json({ message: "User registered successfully" });
      } else {
        return res.send(500).json({ message: "Registeration Failed" });
      }
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Some error occured, Please try again" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      const matchPassword = await bcrypt.compare(password, userExist.password);
      if (matchPassword) {
        return res.status(200).json({ message: "Login Successful" });
      } else {
        return res.status(403).json({ message: "Login Failed" });
      }
    } else {
      return res.status(404).json({ message: "User Doesn't Exist" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
