import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
import Variation from "../models/variation.model.js";

const router = express.Router();

router.post("/:variationId", async (req, res) => {
  const { variationId } = req.params;
  try {
    const variation = await Variation.findById(variationId).populate(
      "productId"
    );

    if (!variation) {
      return res.status(404).json({ message: "Variation not found" });
    }

    res.status(200).json({
      variation,
      product: variation.productId,
    });
  } catch (error) {
    console.error("Error fetching variation:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/allVariation/:variationId", async (req, res) => {
  const { variationId } = req.params;

  try {
    const variation = await Variation.findById(variationId);
    if (!variation) {
      return res.status(404).json({ message: "Variation not found" });
    }

    const productId = variation.productId;

    const variations = await Variation.find({ productId }).populate(
      "productId"
    );

    if (!variations) {
      return res.status(404).json({ message: "Variations not found" });
    }

    res.status(200).json({
      variations,
      product: variations[0].productId,
    });
  } catch (error) {
    console.error("Error fetching all variations:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export default router;
