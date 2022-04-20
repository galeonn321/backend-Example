const cartCtrl = {};

const cartModel = require("../models/cart.Model.js");

cartCtrl.getCarts = async (req, res) => {
  try {
    const carts = await cartModel.find();
    res.json({ ok: true, message: "carts", data: carts });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      data: "",
    });
  }
};

cartCtrl.addCart = async (req, res) => {
  try {
    const newCart = await cartModel.create(req.body);
    res.status(201).json({
      ok: true,
      message: "registry created",
      data: newCart,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      data: "",
    });
  }
};

cartCtrl.getCartByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const cart = await cartModel.findOne(userId);
    if (!cart) {
      return res
        .status(204)
        .json({ ok: false, message: "Empty cart", data: "" });
    }
    res
    .status(200)
    .json({ ok: true, message: "Registry found", data: cart });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      data: "",
    });
  }
};

cartCtrl.deleteCartById = async (req, res) => {
  try {
    const id = req.params.id;

    const resp = await cartModel.findById(id);
    if (!resp) {
      return res
        .status(404)
        .json({ ok: false, message: "Cart not found", data: "" });
    }

    await resp.deleteOne(req.body);

    res.json({ ok: true, message: "Cart removed", data: "" });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      data: "",
    });
  }
};


module.exports = cartCtrl;

// 1.- carrito tiene id propio
// 2.- id usuario que le pertenece el carrito
// 3.- precio total
// 4.- lista de productos [{}]<<<<
// 5.-
