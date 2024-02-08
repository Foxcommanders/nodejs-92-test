const fs = require("node:fs/promise");
const path = require("node:path");

async function getAll(){
    const books = await readBooks();

    return books;
}