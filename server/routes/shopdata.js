const express = require("express");
const router = express.Router();
const accessories = require("../DATA/shop/accessories.json");
const clothing = require("../DATA/shop/clothing.json");
const equipment = require("../DATA/shop/equipment.json");
const footwear = require("../DATA/shop/footwear.json");

router.get("/:item", (req, res) => {
    const item = req.params.item;
    if(item==="accessories"){
        return res.status(200).json({accessories});
    }
    else if(item==="clothing"){
        return res.status(200).json({clothing});
    }
    else if(item==="equipment"){
        return res.status(200).json({equipment});
    }
    else{
        return res.status(200).json({footwear});
    }
});

module.exports = router;
