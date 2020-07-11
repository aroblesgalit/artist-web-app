const router = require("express").Router();
const artsController = require("../../controllers/artsController");

// Matches with "/api/arts"
router.route("/")
    .get(artsController.getAllArts)
    .post(artsController.addArt)

// Matches with "/api/arts/:id"
router.route("/:id")
    .put(artsController.updateArt)
    .delete(artsController.deleteArt)

module.exports = router;