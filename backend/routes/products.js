const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const mongoose = require("mongoose");

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// GET new collections
router.get("/newcollections", async (req, res) => {
  try {
    let products = await Product.find({});
    let newcollections = products.slice(1).slice(-8);
    console.log("New Collections fetched");
    res.json(newcollections);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch new collections" });
  }
});

// GET popular in women
router.get("/popularinwomen", async (req, res) => {
  try {
    let products = await Product.find({ category: "women" });
    let popular_in_women = products.slice(0, 4);
    console.log("Popular in Women fetched");
    res.json(popular_in_women);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch popular in women" });
  }
});

// GET related products
router.get("/relatedproducts/:category", async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    const relatedProducts = products.slice(0, 4);
    res.json(relatedProducts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch related products" });
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

module.exports = router;
