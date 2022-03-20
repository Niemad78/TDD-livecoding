const jwt = require("jsonwebtoken");
const { SECRET_JWT } = require("../env");

const createToken = (id) => {
  const token = jwt.sign(
    {id},
    SECRET_JWT,
    {
      expiresIn: "1h"
    }
  );
  return token;
};

const authenticateWithJsonWebToken = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, SECRET_JWT, (err) => {
      if (err) {
        res.status(401).json({errorMessage: "No access allowed"});
      } else {
        next();
      };
    });
  } else {
    res.status(401).json({errorMessage: "No access allowed"});
  }
};

module.exports = {
  createToken,
  authenticateWithJsonWebToken,
}