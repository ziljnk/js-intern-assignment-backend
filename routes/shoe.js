const shoeController = require("../controllers/shoeController");

const router = require("express").Router();

//CREATE A NEW PRODUCT
router.post("/", shoeController.addShoe);

//GET ALL PRODUCTS
router.get("/", shoeController.getAllShoes);

//GET A PRODUCT BY ID
router.get("/:id", shoeController.getAShoe);

//UPDATE A PRODUCT BY ID
router.put("/:id", shoeController.updateAShoe);

//DELETE A PRODUCT BY ID
router.delete("/:id", shoeController.deleteAShoe);

module.exports = router;
