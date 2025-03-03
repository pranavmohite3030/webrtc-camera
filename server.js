const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    ws.on("message", (message) => {
        console.log("Received:", message);
        ws.send("Hello from server!");
    });
});

server.listen(8080, () => console.log("Server running on port 8080"));
