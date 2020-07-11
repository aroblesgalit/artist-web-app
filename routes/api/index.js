const router = require("express").Router();
const userRoutes = require("./user");
const itemRoutes = require("./item");
const artRoutes = require("./art");

router.use("/user", userRoutes);
router.use("/items", itemRoutes);
router.use("/arts", artRoutes);

module.exports = router;