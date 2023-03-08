const express = require("express");
const router = express.Router();
const trainers = require("../DATA/trainers/trainers.json");

router.get("/:item", (req, res) => {
  const item = req.params.item;
  if (item === "trainers") {
    return res.status(200).json({ trainers });
  }
});

module.exports = router;
