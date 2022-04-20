const mongoose = require("mongoose");
//after purchase
const orderSchema = mongoose.schema({
  userId: {
    type: String,
    required: true,
  },
  products: [
    {
      productId: {
        id: number,
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
      productPrice:{
          type:Number,
          required:true
      }
    },
  ],
  amount: {
    type: Number,
    address: Object,
    default: "Pending",
  },
  state: {
    type: String,
    required: true,
    default: "In progress",
  },
});

const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel;
