const cartController = require("../controllers/cartController");

const router = require("express").Router();

router.post("/", cartController.addToCart);
router.get("/", cartController.getAllProductsInCart);
router.delete("/:id", cartController.deleteCartItem);

module.exports = router;
