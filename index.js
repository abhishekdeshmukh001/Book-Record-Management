const express = require('express');

const dotenv = require('dotenv');
const DBConnection = require('./databaseConnection');
const PORT = 8081;

// // users-data import
// const { users } = require('./data/users.json');

// Importing routes
const userRouter = require("./routes/users");
const booksRouter = require("./routes/books");

dotenv.config();

const app = express();

DBConnection();



app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is up and running"
    });
});

app.use('/users', userRouter);
app.use('/books', booksRouter);


app.get("*", (req, res) => {
    res.status(404).json({
        message: "This route does not exist"
    });
});


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});

// 632d4e0183a432c938276f18