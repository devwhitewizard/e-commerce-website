const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Product Schema
const productSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, default: "" },
  image: { type: String, required: true },
  category: { type: String, required: true },
  new_price: { type: Number, required: true },
  old_price: { type: Number },
  available: { type: Boolean, default: true },
  date: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// GET single product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

// POST add product
router.post("/add", async (req, res) => {
  try {
    const lastProduct = await Product.findOne().sort({ id: -1 });
    const id = lastProduct ? lastProduct.id + 1 : 1;
    const product = new Product({ id, ...req.body });
    await product.save();
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ error: "Failed to add product" });
  }
});

// DELETE product
router.delete("/remove/:id", async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.params.id });
    res.json({ success: true, message: "Product removed" });
  } catch (err) {
    res.status(500).json({ error: "Failed to remove product" });
  }
});

// GET products by category
router.get("/category/:category", async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch category products" });
  }
});

module.exports = router;
