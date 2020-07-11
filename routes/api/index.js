const router = require("express").Router();
const userRoutes = require("./user");
const itemRoutes = require("./item");
const artRoutes = require("./art");
const aboutRoutes = require("./about");

router.use("/user", userRoutes);
router.use("/items", itemRoutes);
router.use("/arts", artRoutes);
router.use("/about", aboutRoutes);

module.exports = router;