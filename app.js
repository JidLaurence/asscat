"use strict";
require("dotenv").config();
require("module-alias/register");

var HapiServer = require("./src/config/hapi");
const io = require("socket.io")(HapiServer.listener, {
  cors: {
    origin: "*",
    methods: ["POST", "GET"],
  },
});
const users = {};

io.on("connection", (socket) => {
  socket.on("send-message", (data) => {
    socket.broadcast.emit("chated-message", data);
  });
});

require("./src/database/mongodb");

HapiServer.start(function () {
  console.log("Server is running at : " + HapiServer.info.uri);
});
