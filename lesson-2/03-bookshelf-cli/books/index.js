const fs = require("node:fs/promise");
const path = require("node:path");

async function getAll(){
    const books = await readBooks();

    return books;
}

async function getById(){
    const books = await readBooks();
    const book = books.find();

    return book;
}

async function create(books){
    
}