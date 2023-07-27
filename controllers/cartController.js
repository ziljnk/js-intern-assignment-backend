const { Cart, Shoe } = require("../model/model");
var ObjectId = require("mongodb").ObjectId;

const cartController = {
  addToCart: async (req, res) => {
    try {
      const cart = new Cart(req.body);
      const savedCart = await cart.save();
      const shoe = await Shoe.findById(savedCart.productID);
      await shoe.updateOne({ $set: { isAdded: true } });
      savedCart.productID = shoe;
      res.status(200).json(savedCart);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAllProductsInCart: async (req, res) => {
    try {
      const cart = await Cart.find().populate("productID");
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteCartItem: async (req, res) => {
    try {
      const deletedCart = await Cart.findByIdAndDelete(req.params.id);
      await Shoe.findByIdAndUpdate(deletedCart.productID, { isAdded: false });
      res.status(200).json(deletedCart);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = cartController;
