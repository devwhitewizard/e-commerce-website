const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Reuse User model (import carefully to avoid re-registration)
let User;
try {
  User = mongoose.model("User");
} catch {
  const userSchema = new mongoose.Schema({
    cartData: { type: Object, default: {} },
  });
  User = mongoose.model("User", userSchema);
}

// Middleware: verify JWT token
const jwt = require("jsonwebtoken");
const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ error: "Access denied. No token." });
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);
    req.user = data.user;
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
};

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
