const { connection } = require("../db_connection");

const findMany = () => {
  const sql = "SELECT * FROM users";
  return connection.promise().query(sql);
};

const findOne = (userId) => {
  const sql = "SELECT * FROM users WHERE id = ?";
  return connection.promise().query(sql, [userId]);
};

const postOne = (user) => {
  const sql = "INSERT INTO users SET ?";
  return connection.promise().query(sql, [user]);
};

const modifyOne = (user, userId) => {
  const sql = "UPDATE users SET ? WHERE id = ?";
  return connection.promise().query(sql, [user, userId]);
};

const deleteOne = (userId) => {
  const sql = "DELETE FROM users WHERE id = ?";
  return connection.promise().query(sql, [userId]);
};

module.exports = {
  findMany,
  findOne,
  postOne,
  modifyOne,
  deleteOne,
};