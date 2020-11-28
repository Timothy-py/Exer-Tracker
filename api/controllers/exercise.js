const Exercise = require('../models/exercise');

exports.getAllExercises = (req, res) => {
    Exercise.find()
    .then(exercises => res.json({
        status: true,
        message: 'All Exercises Retrieved Successfully',
        data: exercises
    }))
    .catch(err => res.status(400).json('Error: '+ err));
};

exports.addNewExercise = (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    })

    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err))
};
