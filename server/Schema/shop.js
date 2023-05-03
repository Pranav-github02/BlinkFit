const mongoose = require("mongoose");

const accessoriesSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  aid: mongoose.Schema.Types.String,
  title: mongoose.Schema.Types.String,
  desc: mongoose.Schema.Types.String,
  price: mongoose.Schema.Types.String,
  image: {
    image1: mongoose.Schema.Types.String,
    image2: mongoose.Schema.Types.String,
  },
  quantity: mongoose.Schema.Types.String,
});

const clothingSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: mongoose.Schema.Types.String,
  title: mongoose.Schema.Types.String,
  desc: mongoose.Schema.Types.String,
  price: mongoose.Schema.Types.String,
  image: {
    image1: mongoose.Schema.Types.String,
    image2: mongoose.Schema.Types.String,
  },
  quantity: mongoose.Schema.Types.String,
  size: mongoose.Schema.Types.String,
});

// const Clothing = mongoose.model("Clothing", clothingSchema);

const equipmentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: mongoose.Schema.Types.String,
  title: mongoose.Schema.Types.String,
  desc: mongoose.Schema.Types.String,
  price: mongoose.Schema.Types.String,
  image: {
    image1: mongoose.Schema.Types.String,
    image2: mongoose.Schema.Types.String,
  },
  qty: mongoose.Schema.Types.String,
});

// const Equipment = mongoose.model("Equipment", equipmentSchema);

const footwearSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: mongoose.Schema.Types.String,
  title: mongoose.Schema.Types.String,
  desc: mongoose.Schema.Types.String,
  price: mongoose.Schema.Types.String,
  image: {
    image1: mongoose.Schema.Types.String,
    image2: mongoose.Schema.Types.String,
  },
  qty: mongoose.Schema.Types.String,
  size: mongoose.Schema.Types.String,
});

module.exports = {
  Accessorie: mongoose.model("Accessories", accessoriesSchema),
  Clothing: mongoose.model("Clothing", clothingSchema),
  Equipment: mongoose.model("Equipment", equipmentSchema),
  Footwear: mongoose.model("Footwear", footwearSchema),
};
