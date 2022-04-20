const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  products: [{
    type: Object,
    required: true,
  }],
  totalPrice: {
    type: Number,
    required: true,
  }
});

const cartModel = mongoose.model("Cart", cartSchema);

module.exports = cartModel;

// 1.- carrito tiene id propio
// 2.- id usuario que le pertenece el carrito
// 3.- precio total
// 4.- lista de cartos [{}]<<<<
// 5.-
