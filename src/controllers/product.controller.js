const productCtrl = {};

const cartModel = require("../models/cart.Model");
const productModel = require("../models/product.Model");

productCtrl.addProduct = async (req, res) => {
  try {
    const newProduct = await productModel.create(req.body);
    res.status(201).json({
      ok: true,
      message: "registry created",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      data: "",
    });
  }
};

productCtrl.getProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.json({ ok: true, message: "products", data: products });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      data: "",
    });
  }
};


productCtrl.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ ok: false, message: "Registry not found", data: "" });
    }
    res.json({ ok: true, message: "Registry found", data: product });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      data: "",
    });
  }
};

productCtrl.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const resp = await productModel.findById(id);
    if (!resp) {
      return res
        .status(404)
        .json({ ok: false, message: "Registro no encontrado", data: "" });
    }

    await resp.updateOne(req.body);

    res.json({ ok: true, message: "Registro actualizado", data: "" });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      data: "",
    });
  }
};

productCtrl.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;

    const resp = await productModel.findById(id);
    if (!resp) {
      return res
        .status(404)
        .json({ ok: false, message: "Registro no encontrado", data: "" });
    }

    await resp.deleteOne(req.body);

    res.json({ ok: true, message: "Registro eliminado", data: "" });
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: error.message,
      data: "",
    });
  }
};



module.exports = productCtrl;
