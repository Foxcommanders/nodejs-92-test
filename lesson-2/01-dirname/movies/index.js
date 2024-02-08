const fs = require("node:fs/promise");
const path = require("node:path");

async function readMovies() {
  const filePath = path.join;
  const data = await fs.readFile("movies.txt");

  return data;
}
module.exports = {
  readMovies,
};
