const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });

let client = null;

wss.on("connection", ws => {
    console.log("New client connected");

    ws.on("message", message => {
        const data = JSON.parse(message);
        if (data.offer) {
            client = ws;
        } else if (data.answer && client) {
            client.send(JSON.stringify(data));
        }
    });

    ws.on("close", () => {
        console.log("Client disconnected");
        client = null;
    });
});

console.log("WebSocket Server running on ws://localhost:8080");
