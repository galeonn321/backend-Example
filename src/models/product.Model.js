const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image1: {
    type: String,
    required: true,
  },
  image2: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
