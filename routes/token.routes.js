const { createToken } = require("../service/jwt");

const router = require("express").Router();

router.post("/", (req, res) => {
  const token = createToken(1);
  res.status(200).json(token);
});

module.exports = router;
