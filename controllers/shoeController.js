const { Shoe } = require("../model/model");

const shoeController = {
  //CREATE A NEW PRODUCT
  addShoe: async (req, res) => {
    try {
      const newShoe = new Shoe(req.body);
      const savedShoe = await newShoe.save();
      res.status(200).json(savedShoe);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //GET ALL PRODUCTS
  getAllShoes: async (req, res) => {
    try {
      const shoes = await Shoe.find();
      res.status(200).json(shoes);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //GET A PRODUCT BY ID
  getAShoe: async (req, res) => {
    try {
      const shoe = await Shoe.findById(req.params.id);
      res.status(200).json(shoe);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //UPDATE A PRODUCT BY ID
  updateAShoe: async (req, res) => {
    try {
      const shoe = await Shoe.findById(req.params.id);
      await shoe.updateOne({ $set: req.body });
      res.status(200).json("Updated Successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  //DELETE A PRODUCT BY ID
  deleteAShoe: async (req, res) => {
    try {
      await Shoe.findByIdAndDelete(req.params.id);
      res.status(200).json("Deleted successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = shoeController;
