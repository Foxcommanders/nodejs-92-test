const fs = require("node:fs/promise");
async function readMovies(){
    const data = await fs.readFile("movies.txt",)

    return data;
}
module.exports = {
  readMovies,
};
