const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    quantity: Number,
    product: Object,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Orders", OrderSchema);
