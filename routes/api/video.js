const router = require("express").Router();
const videosController = require("../../controllers/videosController");

// Matches with "/api/videos"
router.route("/")
    .get(videosController.getAllVideos)
    .post(videosController.addVideo)

// Matches with "/api/videos/:id"
router.route("/:id")
    .put(videosController.updateVideo)
    .delete(videosController.deleteVideo)

module.exports = router;