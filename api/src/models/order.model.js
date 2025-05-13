import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  store: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },

  items: [
    {
      variation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Variation",
        required: true,
      },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],

  customer: {
    name: { type: String, required: true },
    email: String,
    phone: String,
    address: {
      line1: String,
      line2: String,
      city: String,
      zip: String,
      country: String,
    },
  },

  totalAmount: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
    default: "pending",
  },

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Order", OrderSchema);
