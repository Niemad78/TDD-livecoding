const router = require("express").Router();
const { getUsers, getOneUser, addOneUser, getOneCreate, modifyOneUser, deleteOneUser } = require("../controllers/users.controllers");
const { authenticateWithJsonWebToken } = require("../service/jwt");

router.get("/getAll", getUsers);
router.get("/getById/:id", getOneUser);
router.post("/", authenticateWithJsonWebToken, addOneUser, getOneCreate);
router.put("/:id", authenticateWithJsonWebToken, modifyOneUser, getOneUser);
router.delete("/:id", authenticateWithJsonWebToken, deleteOneUser);

module.exports = router;
