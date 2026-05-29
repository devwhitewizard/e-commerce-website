const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  cartData: { type: Object, default: {} },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
