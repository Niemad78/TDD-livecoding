const router = require("express").Router();
const usersRoutes = require("./users.routes");
const tokenRoutes = require("./token.routes");

router.use("/users", usersRoutes);
router.use("/token", tokenRoutes);

module.exports = router;
