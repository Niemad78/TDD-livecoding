const { findMany } = require("../models/users.models");

const getUsers = async (req, res) => {
  try {
    const [result] = await findMany();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({errorMessage: err.message});
  };
};

module.exports = {
  getUsers,
};