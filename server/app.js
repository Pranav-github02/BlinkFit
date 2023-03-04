const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const route = require("./routes/route");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "You are requesting / route" });
});
app.use("/user", route);

module.exports = app;
