const router = require('express').Router();

const userController = require('../controllers/user')
const exerciseController = require('../controllers/exercise')


// USER ROUTES

// get all users
router.get('/users', userController.getAllUsers);
// add a user
router.post('/user/add', userController.addNewUser);


// EXERCISE ROUTES

// get all exercises
router.get('/exercises', exerciseController.getAllExercises);
// add a new exercise
router.post('/exercise/add', exerciseController.addNewExercise);
// get an exercise
router.get('/exercise/:id', exerciseController.getAnExercise);
// delete an exercise
router.delete('/exercise/:id', exerciseController.deleteExercise);
// update an exercise
router.post('/exercise/update/:id', exerciseController.updateExercise);

module.exports = router;