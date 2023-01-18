"use strict";

module.exports = {
  register(/*{ strapi }*/) {},

  bootstrap({ strapi }) {
    let { Server } = require("socket.io");
    let io = new Server(strapi.server.httpServer, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true,
      },
    });

    strapi.io = io;

    io.on("connection", (socket) => {
      console.log(socket.id);
      socket.on("new_order", (data) => {
        console.log(data);
        socket.broadcast.emit("received_order", data);
      });
    });
  },
};
