const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

const serverConfig = {
    origin: "http://localhost:1234",
    credentials: true
}

server.use(express.json());
server.use(cors(serverConfig));

// router files


// routes

// fallback route for invalid routes
server.get("/", (req, res) => {
    res.status(200).json({message: "Database is running."});
})

module.exports = server;