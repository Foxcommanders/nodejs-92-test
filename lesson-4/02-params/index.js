const express = require("express");

const app = express();

// app.use("/api", routes);

// const router = express.Router();

// router.get("/users", (req, res) => null);

// router.get("/users/1", (req, res) => null);

// router.post("/users", (req, res) => null);

// router.put("/users", (req, res) => null);

// router.delete("/users", (req, res) => null);

app.get("/movies/:id", (req, res) => {
    console.log(req.params);

    res.end();
});

server.listen(8080, () => {
    console.log("Server started on port 8080");
  });