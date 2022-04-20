require("dotenv").config();
const express = require("express");
const products = require("./routes/product");
const carts = require("./routes/cart")
const auth = require("./routes/auth");
const cors = require("cors");
require("./database");

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/products", products);
app.use("/api/auth", auth);
app.use("/api/cart", carts);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
