const models = require('../models');
const { User } = require('../models/user');

exports.getAllUsers = (req, res, next)=>{
    User.find()
    .then(users=>{
        res.json(users)
    })
    .cath(err=>{
        res.status(400).json('Error: ' + err)
    })
};


exports.addNewUser = (req, res, next)=>{
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
    .then(() => res.json('User added'))
    .cath(err => res.status(400).json('Error: ' + err));
}