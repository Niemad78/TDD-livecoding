const router = require("express").Router();
const usersRoutes = require("./users.routes");
const tokenRoutes = require("./token.routes");
const imageRoutes = require("./images.routes");

router.use("/users", usersRoutes);
router.use("/token", tokenRoutes);
router.use("/images", imageRoutes);

module.exports = router;
