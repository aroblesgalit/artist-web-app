const router = require("express").Router();
const aboutsController = require("../../controllers/aboutsController");

// Matches with "/api/about"
router.route("/")
    .get(aboutsController.getAbout)
    .post(aboutsController.addAbout)

// Matches with "/api/about/:id"
router.route("/:id")
    .put(aboutsController.updateAbout)

module.exports = router;