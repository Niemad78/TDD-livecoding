const router = require("express").Router();
const usersRoutes = require("./users.routes");
const tokenRoutes = require("./token.routes");
const mailsRoutes = require("./mail.routes");

router.use("/users", usersRoutes);
router.use("/token", tokenRoutes);
router.use("/mails", mailsRoutes);

module.exports = router;
