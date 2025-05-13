import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.model.js";
import Variation from "../models/variation.model.js";

const router = express.Router();

router.post("/:store", async (req, res) => {
  try {
    const { store } = req.params;
    if (!store || store === "undefined") {
      return res.status(400).json({ error: "Store ID is required" });
    }

    const products = await Product.find({ store }).lean();
    const productIds = products.map((p) => p._id);

    const variations = await Variation.aggregate([
      { $match: { productId: { $in: productIds } } },
      {
        $group: {
          _id: "$productId",
          defaultVariation: { $first: "$$ROOT" },
        },
      },
    ]);

    const variationMap = Object.fromEntries(
      variations.map((v) => [v._id.toString(), v.defaultVariation])
    );

    const result = products.map((product) => ({
      _id: product._id,
      name: product.name,
      description: product.description,
      defaultVariation: variationMap[product._id.toString()] || null,
    }));

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/:store/:category", async (req, res) => {
  try {
    const { store, category } = req.params;
    if (
      !store ||
      !category ||
      store === "undefined" ||
      category === "undefined"
    ) {
      return res
        .status(400)
        .json({ error: "Store and Category ID are required" });
    }

    const products = await Product.find({ store, category }).lean();
    const productIds = products.map((p) => p._id);

    const variations = await Variation.aggregate([
      { $match: { productId: { $in: productIds } } },
      {
        $group: {
          _id: "$productId",
          defaultVariation: { $first: "$$ROOT" },
        },
      },
    ]);

    const variationMap = Object.fromEntries(
      variations.map((v) => [v._id.toString(), v.defaultVariation])
    );

    const result = products.map((product) => ({
      _id: product._id,
      name: product.name,
      description: product.description,
      defaultVariation: variationMap[product._id.toString()] || null,
    }));

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
