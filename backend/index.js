const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const Book = require("./models/bookModel");
const app = express();
const port = process.env.PORT || 3000;
const User =require("./models/user")
const cookieParser = require('cookie-parser')



const booksRoute = require("./routes/booksRoute");
const loginRoute = require("./routes/loginRoute")

//Route for save a new book
// app.use(cors());
app.use(cors({
    origin: 'http://127.0.0.1:5173', // Replace with your React application's origin
    credentials: true // Allow credentials to be sent with the request
  }));
app.use(cookieParser())
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use('/books',booksRoute);
app.use('/users',loginRoute)

main()
  .then(() => console.log("dbconnected"))
  .catch((err) => console.log(err));

async function main() {
  const url = process.env.DB_URL;
  const password = process.env.DB_PSWD;
  const urlWithPassword = url.replace("<password>", password);

  await mongoose.connect(urlWithPassword);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
