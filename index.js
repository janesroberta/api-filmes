const express = require("express");
const server = express();
const cors = require("cors");

server.use(cors());

const filmes = require("./src/data/filmes.json")

server.get("/filmes", (req,res) => {
    return res.json(filmes);
});

server.listen(3000, () => {
    console.log("o servidor esta fucionando")
});