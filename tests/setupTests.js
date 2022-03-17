const app = require("../app");
const { deleteAllDBData, closeConnection } = require("../db_connection");

const deleteAllData = async () => {
  await deleteAllDBData();
};

const closeApp = () => {
  new Promise((resolve, reject) => {
    app.close((err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      };
    });
  });
};

afterAll(async () => {
  await deleteAllDBData();
  await closeConnection();
  closeApp();
})