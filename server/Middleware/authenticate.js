const jwt = require("jsonwebtoken");
const User = require("../Schema/schema");

const authenticate = async (req, res, next) => {
  try {
    const jwt_token = req.headers.authorization.split(" ");
    const token = jwt_token[1];
    const verify_user = jwt.verify(token, process.env.SECRET_KEY);
    if (verify_user) {
      req.email = verify_user.user_email;
      req.id = verify_user.user_id;
      next();
    } else {
      return res.status(403).json({ message: "Token expired, login again" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = authenticate;
