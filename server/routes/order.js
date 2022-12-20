const router = require("express").Router();
const Order = require("../models/Order.js");
const authMiddleware = require("../routes/auth");

router.post("/create", authMiddleware, async (req, res) => {
  const order = req.body;

  const newOrder = new Order(order);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong!",
      error: err,
    });
  }
});

module.exports = router;
