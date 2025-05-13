import mongoose from "mongoose";

const StoreSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  contactNumber: String,
  email: String,
  address: String,
  image: String,
});

const Store = mongoose.model("Store", StoreSchema);
export default Store;
