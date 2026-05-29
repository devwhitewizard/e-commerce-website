const mongoose = require("mongoose");

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

module.exports = mongoose.models.Product || mongoose.model("Product", productSchema);
