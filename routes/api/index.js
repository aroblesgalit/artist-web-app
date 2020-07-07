const router = require("express").Router();
const userRoutes = require("./user");
const itemRoutes = require("./item");

router.use("/user", userRoutes);
router.use("/items", itemRoutes);

module.exports = router;