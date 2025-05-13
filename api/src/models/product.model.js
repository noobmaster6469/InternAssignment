import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  store: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  basePrice: Number,
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
