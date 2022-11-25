const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const route = require("./routes/route");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", route);

module.exports = app;
