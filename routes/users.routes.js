const router = require("express").Router();
const { getUsers } = require("../controllers/users.controllers");
const { authenticateWithJsonWebToken } = require("../service/jwt");

router.get("/", getUsers);
router.post("/", authenticateWithJsonWebToken);
router.put("/:id", authenticateWithJsonWebToken);
router.delete("/:id", authenticateWithJsonWebToken);

module.exports = router;
