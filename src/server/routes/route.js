const express = require("express");
const router = express.Router();
const User = require("../Schema/schema");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  const token = req.body.token;
  // console.log(`req.body token ${token}`);
  if (token) {
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await User.findOne({
      _id: verifyToken,
      "tokens.token": token,
    });
    if (!rootUser) {
      return res.status(409).json({ message: "Not Authorized User" });
    } else {
      return res
        .status(200)
        .json({ message: "User Authorized", user: rootUser, authorized: true });
    }
  } else {
    return res.status(404).json({ message: "Ask The user to login first" });
  }
});

router.get("/signup/", (req, res) => {
  User.find()
    .then((result) =>
      res.status(200).json({ message: "Entries from the DB", entries: result })
    )
    .catch((err) => res.status(500).json({ error: err }));
});
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
        const jwttoken = await userExist.generateAuthToken();
        // console.log(`/login - ${jwttoken}`);
        return res
          .status(200)
          .json({ message: "Login Successful", token: jwttoken });
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

// router.get("/secret", async (req, res) => {
//   const token = req.body.token;
//   console.log(`req.body token ${token}`);
//   const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
//   const rootUser = await User.findOne({
//     _id: verifyToken,
//     "tokens.token": token,
//   });
//   if (!rootUser) {
//     return res.status(409).json({ message: "Not Authorized User" });
//   } else {
//     return res
//       .status(200)
//       .json({ message: "User Authorized", user: rootUser, authorized: true });
//   }
// });

module.exports = router;
