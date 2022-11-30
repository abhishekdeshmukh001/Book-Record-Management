const express = require('express');
const { getAllUsers, getSingleUserById, deleteUser, updateUserById, createNewUser, getSubscriptionDetailsById } = require('../controllers/user-controller');
const { users } = require('../data/users.json');

const { UserModel, BookModel } = require('../models')

const router = express.Router();

/*
- Route : /users
- Method: GET
- Desc: Get all users
- Access: Public
- Param: None 
*/

router.get("/", getAllUsers);

/*
- Route : /users/{id}
- Method: GET
- Desc: Get single user by id
- Access: Public
- Param: id
*/

router.get("/:id", getSingleUserById);

/*
- Route : /users
- Method: POST
- Desc: Create new user
- Access: Public
- Param: None
*/

router.post("/", createNewUser);

/*
- Route : /users/{id}
- Method: PUT
- Desc: Update user by id
- Access: Public
- Param: id
*/

router.put("/:id", updateUserById);

/*
- Route : /users/{id}
- Method: DELETE
- Desc: Delete user by id
- Access: Public
- Param: id
*/

router.delete("/:id", deleteUser);


/*
- Route : /users/subscription-details/{id}
- Method: GET
- Desc: Get user subscription details
- Access: Public
- Param: id
*/

router.get("/subscription-details/:id", getSubscriptionDetailsById);


module.exports = router;