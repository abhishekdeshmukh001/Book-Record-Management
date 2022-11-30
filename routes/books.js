const express = require('express');
const router = express.Router();

const { books } = require('../data/books.json');
const { users } = require('../data/users.json');

const { UserModel, BookModel } = require('../models');

const { getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook, updateBookById, getSingleBookByName } = require('../controllers/book-controller');

/*
- Route : /books
- Method: GET
- Desc: Get all books
- Access: Public
- Param: None
*/

router.get("/", getAllBooks);


/*
- Route : /books/{id}
- Method: GET
- Desc: Get book by id
- Access: Public
- Param: id
*/

router.get("/:id", getSingleBookById);


/*
- Route : /books/{name}
- Method: GET
- Desc: Get book by name
- Access: Public
- Param: id
*/

router.get("/getbook/name/:name", getSingleBookByName);


/*
- Route : /books/issued/by-user
- Method: GET
- Desc: Get all issued books
- Access: Public
- Param: None
*/

router.get("/issued/by-user", getAllIssuedBooks)


/*
- Route : /books
- Method: POST
- Desc: Create/ Add a new book
- Access: Public
- Param: None
- Data: id, name, author, genre, price, publisher
*/

router.post("/", addNewBook);


/*
- Route : /books/{id}
- Method: PUT
- Desc: Update a book by id
- Access: Public
- Param: id
- Data: id, name, author, genre, price, publisher
*/

router.put("/:id", updateBookById)


// Default Export
module.exports = router;