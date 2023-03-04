const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

const url = process.env.DB_URL;

mongoose
  .connect(url)
  .then(() => {
    console.log("Connection with database successful");
  })
  .catch((error) => {
    console.log(error);
  });
