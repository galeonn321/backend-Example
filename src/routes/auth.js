const userModel = require("../models/user.Model");
const router = require("express").Router();
const CryptoJS = require("crypto-js");
const userCtrl = require("../controllers/user.controller");

//Register user
router.post("/register", userCtrl.register);

//Login User
router.post("/login", userCtrl.login);

module.exports = router;
