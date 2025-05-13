import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { connectDB } from "./lib/db.js";
import categoryRoute from "./routes/category.route.js";
import storeRoute from "./routes/store.route.js";
import productRoute from "./routes/product.route.js";
import variationRoute from "./routes/variation.route.js";

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/uploads", express.static(path.resolve("src/uploads")));

app.use("/api/category", categoryRoute);
app.use("/api/store", storeRoute);
app.use("/api/product", productRoute);
app.use("/api/variation", variationRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDB();
});
