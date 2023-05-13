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
  } else if (item === "footwear") {
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
  } else if (item === "allItems") {
    try {
      const result = await Promise.all([
        Accessorie.aggregate([
          // Pipeline stages for the Accessorie collection
          {
            $match: {
              $expr: { $gt: [{ $strLenCP: "$title" }, 0] },
            },
          }, // Example match stage
          {
            $project: {
              id: 1,
              title: 1,
              desc: 1,
              price: 1,
              image: 1,
              qty: 1,
              size: 1,
              quantity: 1,
              aid: 1,
            },
          }, // Example project stage
        ]),
        Clothing.aggregate([
          // Pipeline stages for the Clothing collection
          {
            $match: {
              $expr: { $gt: [{ $strLenCP: "$title" }, 0] },
            },
          }, // Example match stage
          {
            $project: {
              id: 1,
              title: 1,
              desc: 1,
              price: 1,
              image: 1,
              qty: 1,
              size: 1,
              quantity: 1,
              aid: 1,
            },
          }, // Example project stage
        ]),
        Footwear.aggregate([
          // Pipeline stages for the Footwear collection
          {
            $match: {
              $expr: { $gt: [{ $strLenCP: "$title" }, 0] },
            },
          }, // Example match stage
          {
            $project: {
              id: 1,
              title: 1,
              desc: 1,
              price: 1,
              image: 1,
              qty: 1,
              size: 1,
              quantity: 1,
              aid: 1,
            },
          }, // Example project stage
        ]),
        Equipment.aggregate([
          // Pipeline stages for the Equipment collection
          {
            $match: {
              $expr: { $gt: [{ $strLenCP: "$title" }, 0] },
            },
          }, // Example match stage
          {
            $project: {
              id: 1,
              title: 1,
              desc: 1,
              price: 1,
              image: 1,
              qty: 1,
              size: 1,
              quantity: 1,
              aid: 1,
            },
          }, // Example project stage
        ]),
      ]);

      const [accessorieData, clothingData, footwearData, equipmentData] =
        result;

      const mergedData = [
        ...accessorieData,
        ...clothingData,
        ...footwearData,
        ...equipmentData,
      ];

      res.status(200).json(mergedData);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(404).json({ message: "Entry not found" });
  }
});

router.get("/getcount/:item", async (req, res) => {
  const item = req.params.item;
  if (item === "accessories") {
    try {
      const data = await Accessorie.find();
      const quantity = data.length;
      if (data) {
        return res.status(200).json({ quantity });
      } else {
        return res.status(500).json({ message: "Server error" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else if (item === "clothing") {
    try {
      const data = await Clothing.find();
      const quantity = data.length;
      if (data) {
        return res.status(200).json({ quantity });
      } else {
        return res.status(500).json({ message: "Server error" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else if (item === "equipment") {
    try {
      const data = await Equipment.find();
      const quantity = data.length;
      if (data) {
        return res.status(200).json({ quantity });
      } else {
        return res.status(500).json({ message: "Server error" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else if (item === "footwear") {
    try {
      const data = await Footwear.find();
      const quantity = data.length;
      if (data) {
        return res.status(200).json({ quantity });
      } else {
        return res.status(500).json({ message: "Server error" });
      }
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } else {
    return res.status(404).json({ message: "Entry not found" });
  }
});

router.get("/allItems", async (req, res) => {
  console.log(1);
  try {
    console.log(2);
    const result = await Accessorie.aggregate([
      {
        $facet: {
          accessorieData: [],
          clothingData: [],
          footwearData: [],
          equipmentData: [],
        },
      },
      {
        $project: {
          mergedData: {
            $concatArrays: [
              "$accessorieData",
              "$clothingData",
              "$footwearData",
              "$equipmentData",
            ],
          },
        },
      },
    ]);
    console.log(3);
    res.status(200).json(result[0].mergedData);
    console.log(4);
  } catch (error) {
    console.log(5);
    console.error("Error fetching data:", error);
    console.log(6);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
