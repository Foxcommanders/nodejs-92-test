const fs = require("node:fs/promises");
const path = require("node:path");

const cors = require("cors");
const express = require("express");

const app = express();

app.use(
    cors({
      origin: "http://localhost:3000",
      optionsSuccessStatus: 200,
    })
  );

  app.get("/books", async (req, res) => {
    const filePath = path.join(__dirname, "books.json");

});