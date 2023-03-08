const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const route = require("./routes/route");
const shopdata = require("./routes/shopdata");
const trainersdata = require("./routes/trainers");
const workoutsdata = require("./routes/workouts");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "You are requesting / route" });
});
app.use("/user", route);
app.use("/shop", shopdata);
app.use("/trainers", trainersdata);
app.use("/workouts", workoutsdata);

module.exports = app;
