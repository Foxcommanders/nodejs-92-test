const fs = require("node:fs/promise");
const path = require("node:path");

async function readMovies() {
  // const filepath = path.join(__dirname, "../data/movies.txt");
  const filePath = path.join(__dirname, "..", "data", "movies.txt");
  const data = await fs.readFile(filePath, { encoding: "utf-8" });

  return data;
}
module.exports = {
  readMovies,
};
