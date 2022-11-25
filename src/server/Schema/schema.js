const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstname: mongoose.Schema.Types.String,
  lastname: mongoose.Schema.Types.String,
  email: mongoose.Schema.Types.String,
  password: mongoose.Schema.Types.String,
});

userSchema.pre("save", async function (next) {
  try {
    if (this.password && this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 12);
    }
    next();
  } catch (err) {
    next(err);
  }
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
