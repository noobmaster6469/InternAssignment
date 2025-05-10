import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();

dotenv.config();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

const mesage = {
  name: "Hello World",
  description: "This is a simple API",
};

app.post("/give", (req, res) => {
  res.json(mesage);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
