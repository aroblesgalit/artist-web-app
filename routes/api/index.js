const router = require("express").Router();
const userRoutes = require("./user");
const itemRoutes = require("./item");
const artRoutes = require("./art");
const aboutRoutes = require("./about");
const videoRoutes = require("./video");

router.use("/user", userRoutes);
router.use("/items", itemRoutes);
router.use("/arts", artRoutes);
router.use("/about", aboutRoutes);
router.use("/videos", videoRoutes);

module.exports = router;