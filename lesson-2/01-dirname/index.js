const { error } = require("console");
const movies = require("./movies");

movies
  .readMovies()
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
