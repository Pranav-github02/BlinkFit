const express = require("express");
const router = express.Router();
const accessories = require("../DATA/shop/accessories.json");
const clothing = require("../DATA/shop/clothing.json");
const equipment = require("../DATA/shop/equipment.json");
const footwear = require("../DATA/shop/footwear.json");
const { Accessorie } = require("../Schema/shop");
const { Clothing } = require("../Schema/shop");
const { Equipment } = require("../Schema/shop");
const { Footwear } = require("../Schema/shop");

router.get("/:item", async (req, res) => {
  const item = req.params.item;
  if (item === "accessories") {
    try {
      const data = await Accessorie.find();
      if (data) {
        return res.status(200).json({ data });
      } else {
        return res.status(500).json({ message: "Server error" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else if (item === "clothing") {
    try {
      const data = await Clothing.find();
      if (data) {
        return res.status(200).json({ data });
      } else {
        return res.status(500).json({ message: "Server error" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else if (item === "equipment") {
    try {
      const data = await Equipment.find();
      if (data) {
        return res.status(200).json({ data });
      } else {
        return res.status(500).json({ message: "Server error" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    try {
      const data = await Footwear.find();
      if (data) {
        return res.status(200).json({ data });
      } else {
        return res.status(500).json({ message: "Server error" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
});

module.exports = router;
