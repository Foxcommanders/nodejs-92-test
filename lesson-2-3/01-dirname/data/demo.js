const fs = require("node:fs/promise");

async function main() {
  const data = await fs.readFile("movies.txt", { encoding: "utf-8" });

  await fs.writeFile(
    "movies.txt",
    data.split("/n").filter((film) => film !== "Titanic")
  );
}

main().catch(console.error);
