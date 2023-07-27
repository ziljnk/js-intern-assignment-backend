const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const shoeRoute = require("./routes/shoe");
const cartRoute = require("./routes/cart");

dotenv.config();
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.use("/api/v1/products", shoeRoute);
app.use("/api/v1/cart", cartRoute);

app.listen(8000, () => {
  console.log("Server is running...");
});
