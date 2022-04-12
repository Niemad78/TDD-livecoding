const express = require("express");
const cors = require("cors");
const mainRouter = require("./routes");
const { CLIENT_ORIGIN, SERVER_PORT, inTestEnv } = require("./env");
const socketIO = require("socket.io");
const uniqid = require("uniqid");

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

const io = socketIO(server, {
  cors: {
    origin: ["http://localhost:3000"],
  }
})

const messageList = [
  {id: uniqid(), author: "server", text: "Welcome to Wildchat"}
]

io.on("connect", (socket) => {
  console.log("user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("newMessageFromClient", (newMessageFromClient) => {
    console.log(newMessageFromClient);
    messageList.push({
      id: uniqid(),
      author: newMessageFromClient.author,
      text: newMessageFromClient.text,
    });

    io.emit("updateMessageListe", messageList);
  })

  io.emit("initialMessage", messageList);
})

module.exports = server;