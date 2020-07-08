const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

// Matches with "/api/items"
router.route("/")
    .get(itemsController.getAllItems)
    .post(itemsController.addItem)

// Matches with "/api/items/:id"
router.route("/:id")
    .put(itemsController.updateItem)
    .get(itemsController.getItemById)

module.exports = router;