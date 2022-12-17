const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    overview: String,
    price: {
      type: Number,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    rating: Number,
    quantity: Number,
    popularity: Number,
    brand: String,
    color: [
      {
        name: String,
        price: Number,
        imageUrl: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
