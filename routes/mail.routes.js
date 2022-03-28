const send = require("../controllers/mails.controller");

const router = require("express").Router();

router.post("/", send);

module.exports = router;