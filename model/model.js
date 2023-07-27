const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Shoe",
    required: true,
  },
});

const shoeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  isAdded: {
    type: Boolean,
    required: true,
  },
});

let Shoe = mongoose.model("Shoe", shoeSchema);
let Cart = mongoose.model("Cart", cartSchema);

module.exports = { Shoe, Cart };
