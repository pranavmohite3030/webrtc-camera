const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "https://pranavmohite3030.github.io" })); // Allow requests from your GitHub Pages

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
    console.log("New client connected!");

    ws.on("message", (message) => {
        console.log("Received:", message);
        ws.send("Hello from server!"); // Send a response back
    });

    ws.on("close", () => console.log("Client disconnected"));
});

// Start the server on port 8080
server.listen(8080, () => console.log("Server running on port 8080"));
