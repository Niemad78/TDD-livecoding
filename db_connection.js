const mysql = require("mysql2");
const { DB_HOST, DB_PORT, DB_USER, DB_PASS, DB_NAME, inTestEnv } = require("./env");

const config = {
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
  name: DB_NAME,
};

const connection = mysql.createConnection(config);

const closeConnection = async () => new Promise((resolve, reject) => {
  if (connection) {
    connection.end((err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      };
    });
  } else {
    resolve();
  };
});

const query = (...args) => new Promise((resolve, reject) => {
  connection.query(...args, (err, res) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    };
  });
});

const deleteAllDBData = async () => {
  const tableNames = (await query(`SELECT * FROM information_schema.tables WHERE LOWER(table_schema) = ${DB_NAME} AND table_name != 'migrations'`)).map((row) => row.table_name || row.TABLE_NAME);
  if (inTestEnv) {
    await query("SET FOREIGN_KEY_CHECKS=0;");
    tableNames.forEach(async(name) => {
      await query(`TRUNCATE ${name}`);
    });
    await query("SET FOREIGN_KEY_CHECKS=1;");
  };
};

module.exports = {
  connection,
  closeConnection,
  deleteAllDBData,
};