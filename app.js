const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes");
const { CLIENT_ORIGIN, SERVER_PORT, inTestEnv } = require("./env");

const app = express();

app.use(cors({client: CLIENT_ORIGIN}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", mainRouter);

const server = app.listen(SERVER_PORT, () => {
  if (!inTestEnv) {
    console.log(`Server is running on port ${SERVER_PORT}`);
  };
});

module.exports = server;