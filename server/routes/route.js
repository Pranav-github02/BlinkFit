const express = require("express");
const router = express.Router();
const User = require("../Schema/schema");
const mongoose = require("mongoose");
const authenticate = require("../Middleware/authenticate");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const sgMail = require("@sendgrid/mail");
const Joi = require("joi");
const datavalidation = require("../Middleware/datavalidation");
const { findByIdAndUpdate } = require("../Schema/schema");

const validatinSchema = Joi.object().keys({
  firstname: Joi.string().alphanum().max(30).required(),
  lastname: Joi.string().alphanum().max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  mobile: Joi.number().required(),
  address: Joi.string().required(),
});
//user signup
router.post("/signup", datavalidation(validatinSchema), async (req, res) => {
  try {
    const { firstname, lastname, email, password, mobile, address } = req.body;
    const userexists = await User.findOne({ email: email });
    if (userexists) {
      return res
        .status(409)
        .json({ message: "User already exists, try with different email" });
    } else {
      const saltrounds = 10;
      const hashed_password = await bcrypt.hash(password, saltrounds);
      const new_user = new User({
        _id: new mongoose.Types.ObjectId(),
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashed_password,
        mobile: mobile,
        address: address,
      });
      const new_user_created = await new_user.save();
      if (new_user_created) {
        return res
          .status(201)
          .json({ message: "New User created successfully" });
      } else {
        return res
          .status(500)
          .json({ message: "Server error, please try again" });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
});

// user login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user_exists = await User.findOne({ email: email });
    if (user_exists) {
      const verify_password = await bcrypt.compare(
        password,
        user_exists.password
      );
      if (verify_password) {
        const user_email = user_exists.email;
        const user_id = user_exists._id;
        const jwt_token = jwt.sign(
          { user_email, user_id },
          process.env.SECRET_KEY,
          { expiresIn: "1h" }
        );
        return res.status(201).json({ message: "Login Successful", jwt_token });
      } else {
        return res.status(401).json({ message: "Wrong login credentials" });
      }
    } else {
      return res
        .status(401)
        .json({ message: "User Doesn't exists, register yourself first" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
});

const sendEmail = (email) => {
  const OTP = Math.floor(100000 + Math.random() * 900000);
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: email,
    from: "namanv08@gmail.com",
    subject: "YOUR OTP FOR VERIFICATION IS",
    text: "and easy to do anywhere, even with Node.js",
    html: `<strong>${OTP}</strong>`,
  };
  sgMail.send(msg);
  return OTP;
};

let otp;
router.get("/getotp", (req, res) => {
  const { email } = req.body;
  otp = sendEmail(email);
  return res.status(200).json({ message: "OTP sent", otp });
});

router.post("/resetpassword", async (req, res) => {
  const { userotp, email, newpassword } = req.body;
  if (userotp === otp) {
    const finduser = await User.findOne({ email: email });
    if (finduser) {
      const hashed_password = await bcrypt.hash(newpassword, 10);
      const updated_password = {
        password: hashed_password,
      };
      const updated = await User.findByIdAndUpdate(
        finduser._id,
        updated_password
      );
      if (updated) {
        return res.status(200).json({ message: "Password reset successfully" });
      } else {
        return res
          .status(500)
          .json({ message: "Password not updated, try again" });
      }
    } else {
      return res.status(404).json({ message: "Wrong credentials, try again" });
    }
  } else {
    return res.status(404).json({ message: "OTP not matched, try again" });
  }
});

// user details updation
router.patch("/updateuserdetails", authenticate, async (req, res) => {
  try {
    const { firstname, lastname, email, mobile, address } = req.body;
    const find_user = await User.findOne({ email: req.email });
    if (find_user) {
      if (find_user.email === req.email) {
        const updated_user = {
          firstname: firstname,
          lastname: lastname,
          email: email,
          mobile: mobile,
          address: address,
        };
        const user_updated = await User.findByIdAndUpdate(req.id, updated_user);
        if (user_updated) {
          return res
            .status(200)
            .json({ message: "User details updated successfully" });
        } else {
          return res
            .status(500)
            .json({ message: "User details not updated, try again" });
        }
      } else {
        return res.status(409).json({ message: "You are not allowed" });
      }
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
});

// delete user account
router.delete("/deleteaccount", authenticate, async (req, res) => {
  try {
    const { email } = req.body;
    const find_user = await User.findOne({ email: email });
    if (find_user) {
      if (email === req.email) {
        const user_deleted = await User.findByIdAndDelete(req.id);
        if (user_deleted) {
          return res.status(200).json({ message: "User deleted successfully" });
        } else {
          return res
            .status(500)
            .json({ message: "Server error, can't delete user" });
        }
      } else {
        return res.status(409).json({ message: "You are not allowed" });
      }
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
