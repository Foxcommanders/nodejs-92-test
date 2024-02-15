const express = require("express");

const router = express.Router();

router.get("/users", (req, res) => null);

router.get("/users/1", (req, res) => null);

router.post("/users", (req, res) => null);

router.put("/users", (req, res) => null);

router.delete("/users", (req, res) => null);

module.exports = router;