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

// GET All Product
router.get("/get_all", async (req, res) => {
  try {
    const allProduct = await Product.find();

    res.status(200).json(allProduct);
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong.",
      error: err,
    });
  }
});

// GET Product by category
router.get("/get_category/:categoryID", async (req, res) => {
  try {
    const categoryID = req.params.categoryID;

    const filteredProduct = await Product.find({ categoryId: categoryID });

    res.status(200).json(filteredProduct);
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong.",
      error: err,
    });
  }
});

// Get Product by ID
router.get("/get/:id", async (req, res) => {
  const productID = req.params.id;
  try {
    const product = await Product.findById(productID);

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong.",
      error: err,
    });
  }
});

// Search Product
router.get("/search/:text", async (req, res) => {
  const searchText = req.params.text;

  try {
    const searchedProducts = await Product.find({
      title: { $regex: searchText },
    });

    res.status(200).json(searchedProducts);
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong.",
      error: err,
    });
  }
});

module.exports = router;
