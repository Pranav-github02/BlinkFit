const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstname: mongoose.Schema.Types.String,
  lastname: mongoose.Schema.Types.String,
  email: mongoose.Schema.Types.String,
  password: mongoose.Schema.Types.String,
  mobile: mongoose.Schema.Types.Number,
  address: mongoose.Schema.Types.String,
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
