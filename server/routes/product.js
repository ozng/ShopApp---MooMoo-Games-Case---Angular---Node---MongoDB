const router = require("express").Router();
const Product = require("../models/Product.js");

// ADD Product
router.post("/add_product", async (req, res) => {
  const product = req.body;

  const newProduct = new Product(product);

  try {
    const savedProduct = await newProduct.save();

    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong.",
      error: err,
    });
  }
});

module.exports = router;
