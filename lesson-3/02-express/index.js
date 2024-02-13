const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.method);
  console.log(res.url);

  res.end();
});

app.get("/movies", (req, res) => {
  res.end();
});

app.listen(8080, () => {
  console.log("Server started on port 8080");
});
