const express = require("express");
const productCtrl = require("../controllers/product.controller");
const router = express.Router();

//create product
router.post("/", productCtrl.addProduct);
//get product by id
router.get("/:id", productCtrl.getProductById);
// update product
router.put("/:id", productCtrl.updateProduct);
//get all products
router.get("/", productCtrl.getProducts);
// delete product
router.delete("/:id", productCtrl.deleteProduct);

module.exports = router;
