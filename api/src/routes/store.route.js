import express from "express";
import Store from "../models/store.model.js";
const router = express.Router();

router.post("/:slug", async (req, res) => {
  const { slug } = req.params;

  try {
    const storeDetails = await Store.findOne({ name: slug });

    if (!storeDetails) {
      return res.status(404).json({ error: "Store not found" });
    }

    res.status(200).json(storeDetails);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
