const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

// Matches with "/api/items"
router.route("/")
    .get(itemsController.getAllItems)
    .post(itemsController.addItem)
    .put(itemsController.updateSoldItem)

// Matches with "/api/items/:id"
router.route("/:id")
    .get(itemsController.getItemById)
    .put(itemsController.updateItem)

module.exports = router;