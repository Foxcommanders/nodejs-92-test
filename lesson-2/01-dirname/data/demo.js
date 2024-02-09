const fs = require("node:fs/promise");

async function main() {
    const data = await fs.readFile("movies.txt", { encoding: "utf-8"});

}

main().catch(console.error);