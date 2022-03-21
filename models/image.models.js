const { connection } = require("../db_connection");

const postOne = (name) => {
  const sql = "INSERT INTO images (imageName) VALUE (?)";
  return connection.promise().query(sql, [name]);
};

const getOne = () => {
  const sql = "SELECT * FROM images";
  return connection.promise().query(sql);
};

module.exports = {
  postOne,
  getOne,
};