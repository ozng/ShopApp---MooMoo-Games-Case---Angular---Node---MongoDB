const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: String,
    quantity: Number,
    product: Object,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", OrderSchema);
