const express = require("express");
const router = express.Router();
const User = require("../Schema/schema");
const mongoose = require("mongoose");

router.post("/signup", async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  try {
    const findUser = await User.findOne({ email: email });
    if (findUser) {
      return res
        .status(422)
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

module.exports = router;
