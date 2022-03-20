const { findMany, findOne, postOne, modifyOne, deleteOne } = require("../models/users.models");

const getUsers = async (req, res) => {
  try {
    const [result] = await findMany();
    if (result.length === 0) {
      res.status(200).json({message: "Aucun résultat"});
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json({errorMessage: err.message});
  };
};

const getOneUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const [result] = await findOne(userId);
    if (result.length === 0) {
      res.status(200).json({message: "Aucun résultat"});
    } else {
      res.status(200).json(result[0]);
    }
  } catch (err) {
    res.status(500).json({errorMessage: err.message});
  };
};

const addOneUser = async (req, res, next) => {
  const { ...user } = req.body;
  try {
    const [result] = await postOne(user);
    req.id = result.insertId;
    next();
  } catch (err) {
    res.status(500).json({errorMessage: err.message});
  };
};

const getOneCreate = async (req, res) => {
  const { id } = req;
  try {
    const [result] = await findOne(id);
    res.status(201).json(result[0]);
  } catch (err) {
    res.status(500).json({errorMessage: err.message});
  };
};

const modifyOneUser = async (req, res, next) => {
  const userId = req.params.id;
  const { ...user } = req.body;
  try {
    const [result] = await modifyOne(user, userId);
    if (result.affectedRows === 0) {
      res.status(400).json({errorMessage: "Aucune donnée modifiée"});
    } else {
      next()
    }
  } catch (err) {
    res.status(500).json({errorMessage: err.message});
  };
};

const deleteOneUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const [result] = await deleteOne(userId);
    if (result.affectedRows === 0) {
      res.status(400).json({errorMessage: "Aucune donnée supprimée"})
    } else {
      res.status(200).json({message: "Donnée supprimée"});
    }
  } catch (err) {
    res.status(500).json({errorMessage: err.message});
  };
};

module.exports = {
  getUsers,
  getOneUser,
  addOneUser,
  getOneCreate,
  modifyOneUser,
  deleteOneUser,
};