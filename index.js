const express = require("express");
const mongoose = require("mongoose");
const products = require("./models/product.model");
const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("hello port runs on port 3000");
});

app.get("/", (req, res) => {
  res.send("hello api");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await products.create(req.body);
    res.status(200).json({ product });
  } catch {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://nhlanhla:nhlanhla123@nhlanhlaapi.0l2esel.mongodb.net/RestApi?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected!");
  })
  .catch(() => {
    console.log("Error cant connect");
  });
