const router = require('express').Router();

const userController = require('../controllers/user')


// USER ROUTES

// GET ALL USERS
router.get('/users', userController.getAllUsers);

// ADD A USER
router.post('/add', userController.addNewUser);








module.exports = router;