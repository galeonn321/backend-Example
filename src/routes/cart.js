const express = require("express");
const cartCtrl = require("../controllers/cart.controller");
const router = express.Router();

//create cart
router.post("/", cartCtrl.addCart);
//get cart by Userid
router.get("/:id", cartCtrl.getCartByUserId);
//Obtener todos los carts
router.get("/", cartCtrl.getCarts);
//delete cart by ID
router.delete("/", cartCtrl.deleteCartById)


module.exports = router;


