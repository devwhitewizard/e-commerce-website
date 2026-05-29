const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User");
const fetchUser = require("../middleware/auth");

// POST /add — add item to cart
router.post("/add", fetchUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.cartData[req.body.itemId] = (user.cartData[req.body.itemId] || 0) + 1;
    await User.findByIdAndUpdate(req.user.id, { cartData: user.cartData });
    res.json({ success: true, message: "Item added to cart" });
  } catch (err) {
    res.status(500).json({ error: "Failed to add to cart" });
  }
});

// POST /remove — remove item from cart
router.post("/remove", fetchUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.cartData[req.body.itemId] > 0) {
      user.cartData[req.body.itemId] -= 1;
    }
    await User.findByIdAndUpdate(req.user.id, { cartData: user.cartData });
    res.json({ success: true, message: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ error: "Failed to remove from cart" });
  }
});

// POST /get — get user's cart data
router.post("/get", fetchUser, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ success: true, cartData: user.cartData });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch cart" });
  }
});

module.exports = router;
