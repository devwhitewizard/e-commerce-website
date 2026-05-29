const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const fetchUser = require("../middleware/auth");

// POST /signup
router.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ error: "User already exists" });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Initialize empty cart
    let cartData = {};
    for (let i = 0; i < 300; i++) cartData[i] = 0;

    const user = new User({
      name: username,
      email: email,
      password: hashedPassword,
      cartData,
    });
    await user.save();

    const token = jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (err) {
    res.status(500).json({ error: "Signup failed" });
  }
});

// POST /login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ success: false, error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ success: false, error: "Invalid credentials" });

    const token = jwt.sign({ user: { id: user.id } }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

// POST /forgotpassword (basic implementation)
router.post("/forgotpassword", async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "User not found" });

        // Logic for token generation/email sending would go here
        res.json({ success: true, message: "If this email was registered, a password reset link has been sent (Mocked)." });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
module.exports.fetchUser = fetchUser;
