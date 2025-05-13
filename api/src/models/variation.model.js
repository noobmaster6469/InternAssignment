import mongoose from "mongoose";

const VariationSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  size: { type: String, required: true },
  color: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, default: 0 },
});

const Variation = mongoose.model("Variation", VariationSchema);
export default Variation;
