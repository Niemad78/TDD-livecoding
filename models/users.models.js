const { connection } = require("../db_connection");

const findMany = () => {
  const sql = "SELECT * FROM users";
  return connection.promise().query(sql);
};

module.exports = {
  findMany,
};