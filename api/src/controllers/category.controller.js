import Store from "../models/store.model.js";
import Category from "../models/category.model.js";

export const getCategories = async (req, res) => {
  const { store } = req.params;
  try {
    const storeDoc = await Store.findOne({ name: store });

    if (!storeDoc) {
      return res.status(404).json({ error: "Store not found" });
    }

    const categories = await Category.find({ store: storeDoc._id });
    // const categories = await Category.find({ store: storeDoc._id }).populate(
    //   "store"
    // );

    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
