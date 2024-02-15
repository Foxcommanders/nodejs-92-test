const express = require("express");

const app = express();

app.get("/users", (req, res) => null);

app.get("/users/1", (req, res) => null);

app.post("/users", (req, res) => null);

app.put("/users", (req, res) => null);

app.delete("/users", (req, res) => null);

server.listen(8080, () => {
    console.log("Server started on port 8080");
  });