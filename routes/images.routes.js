const { postImageObject } = require("../controllers/images.controlles");

const router = require("express").Router();

router.post("/", postImageObject);

module.exports = router;