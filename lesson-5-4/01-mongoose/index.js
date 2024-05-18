// import crypto from "node:crypto";

// console.log(crypto.randomUUID);
import mongoose from "mongoose";

const DB_URI = "mongodb+srv://student:H7zUJYBZI9SzLPkW@cluster0.jj0vghs.mongodb.net/bookshelf?retryWrites=true&w=majority";

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Database connection success");
    process.exit(0);
  })
  .catch((error) => console.error("Database connection error", error));
